'use strict' //17:14:00
const tf = use ('@tensorflow/tfjs-node')
var fs = use('fs');
var archiver = use('archiver')
var sastrawi = use('sastrawijs')
var tokenTrain, kelasTrain
var acc_training = []
var model = null;
var currentModel = null
var maxLengthCurrentModel = 0
var iterasi = 0;
let epochs = 0
let lr = 0
let opz = 0
let batchSize = 0
let embeddingDim = 0
var kamusModel
var kelasModel

class KlasifikasiController {

    async index({view,response}){
        const resp = {
            status  : true,
            title   : "LSTM RNN",
            html   : view.render('klasifikasi.index')
        }
        return response.json(resp)
    }

    async getOptimizer(num, lr) {
        switch (num) {
            case 1:
                return tf.train.adam(lr)
            case 2:
                return tf.train.sgd(lr)
            default:
                return tf.train.rmsprop(lr)
        }
    }

    async tokenKelas({request}){
        const req = request.post()
        kelasTrain = (req.kelas).split(',')
        tokenTrain = (req.token).split(',')
        
        lr = parseFloat(req.learning_rate)
        epochs = parseInt(req.epoch)
        opz = parseInt(req.optimizer)
        batchSize = parseInt(req.batch_size)
        embeddingDim = parseInt(req.embedding_dim)
    }

    async initLSTM({request}){
        const req = request.post()
        var data_training = req.data_training
        var kelas_training = req.kelas_training
        var kelas_length = kelasTrain.length
        iterasi = req.iterasi
        
        var token_length = (tokenTrain.length)+1
        var max_length = parseInt(req.training_length)

        data_training = data_training.split(',')
        kelas_training = kelas_training.split(',')
        
        acc_training = [];

        var train = [];
        while (data_training.length) {
            train.push(data_training.splice(0, max_length));
        }

        var input_train = await train.map(function (x) { 
            return x.map(function (y) { 
                return parseInt(y); 
            }); 
        });
        
        var input_label = await kelas_training.map(function (x) {
            var oneHot = []
            x = parseInt(x)
            for (let i = 1; i <= kelas_length; i++) {
                if(i==x){
                    oneHot.push(1)
                }else{
                    oneHot.push(0)
                }
            }
            return oneHot
        });

        this.buildLSTM(input_train, input_label, kelas_length, token_length, max_length)
        return
    }

    async buildLSTM(input_train, input_label, kelas_length, token_length, max_length){
        model = await tf.sequential();
        await model.add(tf.layers.embedding({ inputDim: token_length, outputDim: embeddingDim, inputLength: max_length }))
        await model.add(tf.layers.dropout(0.3))
        await model.add(tf.layers.lstm({units: 8, returnSequences: true }) );
        await model.add(tf.layers.dropout(0.2))
        await model.add(tf.layers.lstm({ units: 8}) );
        await model.add(tf.layers.dropout(0.2))
        await model.add(tf.layers.dense({units: kelas_length, activation: 'softmax'}) );
        await model.compile({
            optimizer: await this.getOptimizer(opz, lr),
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });
        // console.log(model.summary())
        var x_train = tf.tensor(input_train)
        var y_train = tf.tensor(input_label)
        return await model.fit(x_train, y_train, {
            epochs: epochs,
            batchSize: batchSize,
            callbacks: {
                onEpochEnd: (epoch, logs) => acc_training.push(logs)                    
            }
        }).then(async info => {
            const summary = {
                max_length : max_length,
                metrics : acc_training,
                kamus: tokenTrain,
                kelas: kelasTrain
            }
            await this.zipModel(summary)
            return info
        });
    }

    async zipModel(summary){
        await model.save('file://./public/model/training-model-iterasi-'+iterasi);
        fs.writeFileSync('./public/model/training-model-iterasi-'+iterasi+'/summary.json', JSON.stringify(summary))
        var output = fs.createWriteStream('./public/model/training-model-iterasi-'+iterasi+'.zip');
        var archive = archiver('zip', {
            gzip: true,
            zlib: { level: 9 }
        });
        archive.on('error', function(err) {
          throw err;
        });
        archive.pipe(output);
        archive.file('./public/model/training-model-iterasi-'+iterasi+'/summary.json', {name: 'summary.json'});
        archive.file('./public/model/training-model-iterasi-'+iterasi+'/model.json', {name: 'model.json'});
        archive.file('./public/model/training-model-iterasi-'+iterasi+'/weights.bin', {name: 'weights.bin'});
        archive.finalize();
        return
    }

    async pengujian({request,response}){
        const req = request.post()
        var data_testing = req.data_testing
        var max_length = req.max_length
        data_testing = data_testing.split(',')
        var testing = [];
        while (data_testing.length) {
            testing.push(data_testing.splice(0, max_length));
        }
        var input_testing = testing.map(function (x) { 
            return x.map(function (y) { 
                return parseInt(y); 
            }); 
        });
        var predict = await model.predict(tf.tensor(input_testing)).arraySync();
        return response.json(predict)
    }

    async summaryTraining({response}){
        var resp = ['process',acc_training];
        if(acc_training.length==epochs){
            resp = ['done',acc_training];
        }
        return response.json(resp)
    }

    static setAsCurrentModel(){
        return ( async () => {
            try {
                currentModel = await tf.loadLayersModel('file://./public/model/current-model/model.json')
                const resp = {
                    status:true
                }
                return resp
            } catch(e) { return e}
          })()
    }

    static checkCurrentModel() {
        return ( async () => {
            try {
                if(!currentModel){
                    currentModel = await tf.loadLayersModel('file://./public/model/current-model/model.json')
                    fs.readFile('./public/model/current-model/summary.json', 'utf8', function (err, data) {
                        if (err) throw err
                        var obj = JSON.parse(data)
                        maxLengthCurrentModel = obj.max_length
                        kamusModel = obj.kamus
                        kelasModel = obj.kelas
                    })
                }
            } catch(e) { return e}
          })()
    }

    static perdictText(intInput){ 
        return ( async () => {
            try {
                await this.checkCurrentModel()
                const predict = await currentModel.predict(tf.tensor(intInput)).arraySync();
                return predict
            } catch(e) { return e}
          })()

    }

    static parseHtmlEnteties(str) {
        return str.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
            var num = parseInt(numStr, 10);
            return String.fromCharCode(num);
        });
    }

    static checkDomain(kata){
        var resp = kata
        const domain = ['.com','.id','.org','.me','.net','.tv','.info','.tv','.edu','.sch','.gov']
        domain.forEach(key => {
            if(kata.includes(key)){
                resp = ""
            }
        });
        return resp
    }

    static filteringWord(slangword,kata_ganti, stopwords,teks){
        var respon = []
        teks.forEach(kata => {
            kata = this.parseHtmlEnteties(kata);
            kata = kata.replace(/(www\.|http?|s?ftp)\S+/g,"");
            kata = this.checkDomain(kata);
            kata = kata.replace(/\S+@\S+/g,"");
            kata = kata.replace(/(@|#)\S+/g,"");
            kata = kata.replace(/&.*;/g,"");
            kata = kata.replace(/[^a-z\s]/g," ");
            kata = kata.replace(/\s+/g," ");
            kata = kata.trim().replace(/&nbsp;/g, '').replace(/<[^\/>][^>]*><\/[^>]+>/g, "");                
            if(kata){
                kata = kata.split(" ");
                kata.forEach(word => {
                    let indexOf = slangword.indexOf(word)
                    if((indexOf>=0) && word){
                        word = kata_ganti[indexOf]
                    }
                    if(!stopwords.includes(word) && word){
                        respon.push(word)
                    }
                });
            }
        });
        return respon
    }

    static stemmer(rootwords,words){
        const stemmer = new sastrawi.Stemmer(rootwords);
        const stemmed = [];
        for (let i = 0; i < words.length; i++) {
            stemmed.push(stemmer.stem(words[i]));
        }
        return stemmed
    }

    static wordSequenceofInteger(input){
        return ( async () => {
            try {
                await this.checkCurrentModel()
                var intInput = []
                input.map(key => {
                    let indexOf = kamusModel.indexOf(key)
                    if(indexOf>=0){
                        intInput.push(indexOf+1)
                    }else{
                        intInput.push(0)
                    }
                })
                const paddingInput = []
                let intInput_length = intInput.length
                if(intInput_length<maxLengthCurrentModel){
                    let kurang = maxLengthCurrentModel-intInput_length
                    for (let i = 0; i <kurang ; i++) {
                        paddingInput.push(0)
                    }
                    var concat = paddingInput.concat(intInput)
                    intInput = concat
                }
                if(intInput_length>maxLengthCurrentModel){
                    var newInput = intInput.splice(0, maxLengthCurrentModel)
                    intInput = newInput
                }
                return intInput

            } catch(e) { return e}
          })()
    }

    static getKelasModel(){
        return kelasModel
    }

    static predictKelas(nilai,kelas){
        if(nilai && kelas){
            let kelasIndex = nilai.indexOf(Math.max(...nilai));
            var kelas_prediksi = kelas[kelasIndex]
            return kelas_prediksi.toUpperCase()
        }
    }

}

module.exports = KlasifikasiController
