'use strict'
const Drive = use('Drive')
const tf = use ('@tensorflow/tfjs-node')

var tokens = []
var datasets;
var windowSize  = 3
var totalEpoch = 10
var embeddingSize = 50
var learningRate = 0.08
var batchSize = 128
var perptxt;
const model = tf.sequential();

class KlasifikasiController {

    async index({view,response}){
        const resp = {
            status  : true,
            title   : "LSTM RNN",
            html   : view.render('rnn.index')
        }
        return response.json(resp)
    }

    async embedding({request, response}){
        const req = request.post()
        const arr_tokens = (req.array_words).split(",")
        const token = (req.token).split(",")
        const models = await this.initEmbedding(arr_tokens,token)
        // const model = await this.lstm()
        var date = new Date()
        var embeddingName = date.getTime()+".json"
        // await Drive.put(embeddingName, Buffer.from(JSON.stringify(model)))
        const resp = {
            embeddingName: embeddingName,
            perptxt: perptxt,
            model: models
        }
        return response.json(resp)
    }

    async initEmbedding(arr_tokens,token){
        tokens = token;
        var inputs = [];
        var outputs = [];
        for (var i = 0; i < arr_tokens.length; i++) {
          var input_i;
          var output_i;
          for (var j = -windowSize; j <= windowSize; j++) {
              var ind = i + j
              if (j != 0 && ind >= 0 && ind < arr_tokens.length) {
                  // Skip-gram
                  input_i = arr_tokens[i]
                  output_i = arr_tokens[ind]
                  inputs.push(tokens.indexOf(input_i))
                  outputs.push(tokens.indexOf(output_i))   
              }      
          }
        }
        var inputTensors = tf.oneHot(tf.tensor1d(inputs, 'int32'), tokens.length);
        var outputTensors = tf.oneHot(tf.tensor1d(outputs, 'int32'), tokens.length);
        
        const input = await tf.input({ shape: [tokens.length] });
        const dense1 = await tf.layers.dense({ units: embeddingSize, useBias: false }).apply(input);
        const embedding = await tf.model({ inputs: input, outputs: dense1 });
        
        const dense2 = await tf.layers.dense({ units: tokens.length, useBias: false, activation: 'sigmoid' }).apply(embedding.outputs);
        var model = await tf.model({ inputs: embedding.inputs, outputs: dense2 });

        await model.compile({
            optimizer: tf.train.adam(learningRate),
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });
        // console.log(inputTensors)
        return await model.fit(inputTensors, outputTensors, {
            epochs: totalEpoch,
            batchSize: batchSize,
            callbacks: { 
                // onEpochEnd: (epoch, logs) => console.log('Accuracy: '+logs.acc+' , Loss: ' + logs.loss) 
                // onBatchEnd: (epoch, logs) => console.log('Accuracy: '+logs.acc+' , Loss: ' + logs.loss) 
            }
        }).then(info => {
            var indices = [...Array(tokens.length)].map((_, i) => i)
            var t = tf.oneHot(tf.tensor1d(indices, 'int32'), tokens.length);
            var arrs = embedding.predict(t).arraySync();
            t.dispose();
            return arrs
        });

        // datasets = await this.oneHotEncode(inputs,outputs);
        // perptxt = Math.floor(Math.sqrt(datasets["inputTensors"].shape[0]))
        // return await this.trainModel()
    }

    async initLSTM({request}){
        const req = request.post()
        var train = req.data_training
        var label = req.kelas_training
        var kelas = req.kelas
        var token = req.token

        var input_train = train.map(function (x) { 
            return x.map(function (y) { 
                return parseInt(y); 
            }); 
        });

        var input_label = label.map(function (x) {
            var oneHot = []
            x = parseInt(x)
            for (let i = 1; i <= kelas.length; i++) {
                if(i==x){
                    oneHot.push(1)
                }else{
                    oneHot.push(0)
                }
            }
            return oneHot
        });

        // const model = await tf.sequential();
        await model.add( tf.layers.embedding({ inputDim: token.length, outputDim: 50, inputLength: input_train[0].length }))
        await model.add( tf.layers.lstm({units: 6, returnSequences: true }) );
        await model.add( tf.layers.lstm({ units: 6}) );
        await model.add( tf.layers.dense({units: kelas.length, activation: 'softmax'}) );
        await model.compile({
            optimizer: tf.train.rmsprop(4e-3),
            loss: 'categoricalCrossentropy',
            metrics: ['acc']
        });
        // console.log(model.summary())
        const resp = await model.fit(tf.tensor(input_train), tf.tensor(input_label), {
            epochs: 10,
            batchSize: 5,
            validationData: [tf.tensor(input_train), tf.tensor(input_label)],
            callbacks: { 
                // onEpochEnd: (epoch, logs) => console.log(logs) 
            }
        }).then(info => {
            var test = model.predict(tf.tensor(input_train)).arraySync();
            // Drive.put("trainModel.json", Buffer.from(JSON.stringify(model)))
            var resp = {
                output_test:test, 
                train:input_train,
                model:model,
            }
            return resp
        });
        await model.save('file://./training-model');
        return resp
    }

    async getModel({response}){
        const getTrainModel = await Drive.get("trainModel.json",'utf-8')
        // await Drive.delete("trainModel.json")
        const trainModel = JSON.parse(getTrainModel)
        return trainModel
    }

    async perdictText({request}){
        // console.log(model)
        
        const req = request.post()
        var modell = req.model
        var text = [[0, 0, 0, 0, 13, 5, 78, 79, 1, 80, 81, 82, 1, 83, 5, 84, 85, 86, 5]]

        const model = await tf.loadLayersModel('file://./training-model/model.json');
        var predict = await  model.predict(tf.tensor(text)).arraySync();
        return predict

    }

}

module.exports = KlasifikasiController
