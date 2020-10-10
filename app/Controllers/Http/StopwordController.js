'use strict'
const Db = use('Database')
const Env = use('Env')

class StopwordController {

    async index({response,request}){
        const req = request.get()
        let start = parseInt(req.start)
        let limit = parseInt(req.limit)
        const data = await Db.table(Env.get('tbl_stopword')).orderBy('kata', 'asc').offset(start).limit(limit)
        const count = await Db.table(Env.get('tbl_stopword')).getCount()
        const resp = {
            status  : true,
            data    : data,
            count   : count
        }
        return response.json(resp)
    }

    async add({response,request}){
        const req = request.post()
        const data = await Db.table(Env.get('tbl_stopword')).where(req)
        var resp = {}
        if(data.length==0){
            const id = await Db.table(Env.get('tbl_stopword')).insert(req)
            const new_data = await Db.table(Env.get('tbl_stopword')).where({_id: id}).first()
            resp = {
                status  : true,
                data    : new_data,
                message : "Berhasil menyimpan kata"
            }
        }else{
            resp = {
                status  : false,
                message : "Kata sudah ada"
            }
        }
        return response.json(resp)
    }

    async update({response,request}){
        const req = request.all()
        const kata = {
            kata    : req['kata']
        }
        const data = await Db.table(Env.get('tbl_stopword')).where(kata)
        var resp = {}
        if(data.length==0){
            const where = {
                _id    : req['_id']
            }
            const data = {
                kata    : req['kata'],
                tgl_dirubah: new Date()
            }
            await Db.table(Env.get('tbl_stopword')).where(where).update(data)
            resp = {
                status  : true,
                message : "Berhasil menyimpan kata"
            }
        }else{
            resp = {
                status  : false,
                message : "Kata sudah ada"
            }
        }
        return response.json(resp)
    }

    async remove({response,request}){
        const req = request.all()
        
        const where = {
            _id    : req['_id']
        }
        await Db.table(Env.get('tbl_stopword')).where(where).delete()
        const resp = {
            status  : true,
            message : "Berhasil menghapus kata"
        }
        return response.json(resp)
    }
}

module.exports = StopwordController
