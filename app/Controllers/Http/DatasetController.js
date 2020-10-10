'use strict'
const Db = use('Database')
const Env = use('Env')

class DatasetController {

    async index({view,response}){
        const resp = {
            status  : true,
            title   : "<i>Dataset</i>",
            html   : view.render('dataset.index')
        }
        return response.json(resp)
    }

    async add({response,request}){
        const req = request.post()
        const dataset = {
            teks    : req['teks'],
            kelas    : req['kelas'],
            scraping_id    : req['scraping_id']
        }
        const data = await Db.table(Env.get('tbl_dataset')).where({teks : req['teks']})
        var resp = {}
        if(data.length==0){
            await Db.table(Env.get('tbl_dataset')).insert(dataset)
            resp = {
                status  : true,
                message : "Berhasil menambahkan Dataset"
            }
        }else{
            resp = {
                status  : false,
                message : "Dataset sudah ada"
            }
        }
        return response.json(resp)
    }

    async getData({response,request}){
        const req = request.get()
        var search = req.search.value
        let start = parseInt(req.start)
        let limit = parseInt(req.length)
        let count_all = await Db.table(Env.get('tbl_dataset')).getCount()
        let count_flter
        var dataset
        const select = ["_id","teks","kelas","scraping_id"]
        if(search){            
            count_flter = await Db.table(Env.get('tbl_dataset'))
                .where('teks', 'LIKE', '%'+search+'%')
                .orWhere('kelas', 'LIKE', '%'+search+'%')
                .getCount()

                dataset = await Db.select(select).table(Env.get('tbl_dataset'))
                .where('teks', 'LIKE', '%'+search+'%')
                .orWhere('kelas', 'LIKE', '%'+search+'%')
                .offset(start).limit(limit)
        }else{
            count_flter =  count_all
            dataset = await Db.select(select).table(Env.get('tbl_dataset')).orderBy('_id', 'desc').offset(start).limit(limit)
        }
        return response.json({
            recordsTotal: count_all,
            recordsFiltered : count_flter,
            data : dataset
        })
    }

    async getAll({response}){
        var kelas = [
            "Direktorat Jenderal Imigrasi",
            "Kementerian Pendidikan dan Kebudayaan",
            // "Kepolisian Negara Republik Indonesia",
            // "Otoritas Jasa Keuangan",
 			// "Kementerian Dalam Negeri",
 			// "Kementerian Sosial",
 			// "PT PLN (Persero)" ,
 			// "Kementerian Energi dan Sumber Daya Mineral (ESDM)",
            // "Badan Penyelenggara Jaminan Sosial Kesehatan",
            // "Badan Penyelenggara Jaminan Sosial Ketenagakerjaan"
        ]

        const select = ["teks", "kelas"]
        const dataset = await Db.select(select).table(Env.get('tbl_dataset')).orderByRaw('RAND()').limit(10000)
        // const dataset = await Db.select(select).table(Env.get('tbl_dataset2')).orderByRaw('RAND()').limit(10000)
        // const dataset = await Db.select(select).table(Env.get('tbl_dataset')).whereIn('kelas',kelas).orderByRaw('RAND()').limit(100)
        return response.json({
            status  : true,
            data    : dataset
        })
    }

    async remove({response,request}){
        const req = request.all()
        const where = {
            _id    : req['_id']
        }
        await Db.table(Env.get('tbl_dataset')).where(where).delete()
        const resp = {
            status  : true,
            message : "Berhasil menghapus dataset"
        }
        return response.json(resp)
    }
}

module.exports = DatasetController
