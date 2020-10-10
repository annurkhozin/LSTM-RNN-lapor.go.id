'use strict'
const Db = use('Database')
const Env = use('Env')

class SlangwordController {

    async index({response,request}){
        const req = request.get()
        let start = parseInt(req.start)
        let limit = parseInt(req.limit)
        const data = await Db.table(Env.get('tbl_slangword')).orderBy('kata', 'asc').offset(start).limit(limit)
        const count = await Db.table(Env.get('tbl_slangword')).getCount()
        const resp = {
            status  : true,
            data    : data,
            count   : count
        }
        return response.json(resp)
    }

    async add({response,request}){
        const req = request.post('kata','kata_ganti')
        const kata = {
            kata    : req['kata']
        }
        const data = await Db.table(Env.get('tbl_slangword')).where(kata)
        var resp = {}
        if(data.length==0){
            await Db.table(Env.get('tbl_slangword')).insert(req)
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

    async update({response,request}){
        const req = request.all()
        var resp = {}
        const where = {
            _id    : req['_id']
        }
        if(req['kata_lama']!=req['kata']){
            const kata = {
                kata    : req['kata']
            }
            const data = await Db.table(Env.get('tbl_slangword')).where(kata)
            if(data.length==0){
                
                const data = {
                    kata    : req['kata'],
                    kata_ganti    : req['kata_ganti'],
                    tgl_dirubah: new Date()
                }
                await Db.table(Env.get('tbl_slangword')).where(where).update(data)
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
        }else{
            const data = {
                kata_ganti    : req['kata_ganti'],
                tgl_dirubah: new Date()
            }
            await Db.table(Env.get('tbl_slangword')).where(where).update(data)
            resp = {
                status  : true,
                message : "Berhasil menyimpan kata"
            }
        }
        return response.json(resp)
    }

    async remove({response,request}){
        const req = request.all()
        
        const where = {
            _id    : req['_id']
        }
        await Db.table(Env.get('tbl_slangword')).where(where).delete()
        const resp = {
            status  : true,
            message : "Berhasil menghapus Kata"
        }
        return response.json(resp)
    }
}

module.exports = SlangwordController
