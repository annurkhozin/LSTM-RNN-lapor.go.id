'use strict'
const db = use('Database')
const Env = use('Env')
const md5 = require('md5');

class BerandaController {
    async index({view}){        
        return view.render('index')
    }


    async auth({request,response,session}){
        const req = request.post()
        const where = {
            username: req['username'],
            password: md5(req['password'])
        }
        const validate = await db.table(Env.get('tbl_admin')).where(where).first()
        var resp = []
        if(validate){
            session.put('sessionKey', validate['_id'])
            resp = {
                status  : true,
                message : "Autentikasi berhasil"
            }
        }else{
            resp = {
                status  : false,
                message : "Username atau password tidak sesuai"
            }
        }
        return response.json(resp)
    }

    async logout({response,session}){     
        session.forget('sessionKey')
        const resp = {
            status  : true,
            message : "Berhasil keluar"
        }
        return response.json(resp)
    }

    async beranda({view,response}){
        const resp = {
            status  : true,
            title   : "Halaman Utama",
            html   : view.render('beranda')
        }
        return response.json(resp)
    }

    async error({view,response}){
        const resp = {
            status  : true,
            title   : "Terjadi Kesalahan",
            html   : view.render('error')
        }
        return response.json(resp)
    }

    
}

module.exports = BerandaController
