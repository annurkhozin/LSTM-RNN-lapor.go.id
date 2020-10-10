'use strict'
const Db = use('Database')
const Env = use('Env')
const Klasifikasi = use('App/Controllers/Http/KlasifikasiController')

class WebApiController {

    async index({view,response}){
        const resp = {
            status  : true,
            title   : "Riwayat Penggunaan API",
            html   : view.render('klasifikasi.history-api')
        }
        return response.json(resp)
    }

    async history({response,request}){
        const req = request.get()
        var search = req.search.value
        let start = parseInt(req.start)
        let limit = parseInt(req.length)
        let count_all = await Db.table(Env.get('tbl_riwayat_api')).getCount()
        let count_flter
        var riwayat
        const select = ["*"]
        if(search){            
            count_flter = await Db.table(Env.get('tbl_riwayat_api'))
                .where('teks', 'LIKE', '%'+search+'%')
                .orWhere('prediksi_label', 'LIKE', '%'+search+'%')
                .orWhere('tgl_akses', 'LIKE', '%'+search+'%')
                .getCount()

                riwayat = await Db.select(select).table(Env.get('tbl_riwayat_api'))
                .where('teks', 'LIKE', '%'+search+'%')
                .orWhere('prediksi_label', 'LIKE', '%'+search+'%')
                .orWhere('tgl_akses', 'LIKE', '%'+search+'%')
                .offset(start).limit(limit)
        }else{
            count_flter =  count_all
            riwayat = await Db.select(select).table(Env.get('tbl_riwayat_api')).orderBy('_id', 'desc').offset(start).limit(limit)
        }
        return response.json({
            recordsTotal: count_all,
            recordsFiltered : count_flter,
            data : riwayat
        })
    }
       
    async kamus(){
        const stopword = await Db.select('kata').table(Env.get('tbl_stopword')).orderBy('kata', 'asc')
        const slangword = await Db.select('kata','kata_ganti').table(Env.get('tbl_slangword')).orderBy('kata', 'asc')
        const rootword = await Db.select('kata').table(Env.get('tbl_rootword')).orderBy('kata', 'asc')
        
        const stopwords = []
        stopword.map(key => {
            stopwords.push(key.kata)
        })

        const slangwords_kata = []
        const slangwords_kata_ganti = []
        slangword.map(key => {
            slangwords_kata.push(key.kata)
            slangwords_kata_ganti.push(key.kata_ganti)
        })
        const slangwords = {
                            kata: slangwords_kata, 
                            kata_ganti: slangwords_kata_ganti
                        }

        const rootwords = []
        rootword.map(key => {
            rootwords.push(key.kata)
        })

        const resp = {
            stopwords   : stopwords,
            slangwords  : slangwords,
            rootwords   : rootwords
        }
        return resp
    }


    async perdictText({request,response}){       
        await Klasifikasi.checkCurrentModel() 
        const req = request.post()
        var input = req.teks
        const kamus = await this.kamus()
        
        var lowerCase = input.toLowerCase()
        var token = lowerCase.split(/\s+/).filter(item => item)
        var filtering = await Klasifikasi.filteringWord(kamus.slangwords.kata, kamus.slangwords.kata_ganti, kamus.stopwords, token)
        var stemmer = await Klasifikasi.stemmer(kamus.rootwords, filtering)
        var word_sequence = await Klasifikasi.wordSequenceofInteger(stemmer)        
        var predict = await Klasifikasi.perdictText([word_sequence])
        var kelas = await Klasifikasi.getKelasModel()
        var predictKelas = await Klasifikasi.predictKelas(predict[0],kelas)

        var ip = request.ip()
        await this.saveHistory(ip, input, predictKelas)
        const resp = {
            prediksi: predictKelas,
            teks: input,
            data: {
                case_folding: lowerCase,
                token: token,
                stemmer: stemmer,
                kelas: kelas,
                nilai: predict
            }
        }
        return response.json(resp)
    }

    async saveHistory(ip, teks, predictKelas){
        if(predictKelas){
            const data = {
                teks: teks,
                prediksi_label: predictKelas,
                ip_address: ip,
                tgl_akses: new Date()
            }
            await Db.table(Env.get('tbl_riwayat_api')).insert(data)    
        }

    }

}

module.exports = WebApiController
