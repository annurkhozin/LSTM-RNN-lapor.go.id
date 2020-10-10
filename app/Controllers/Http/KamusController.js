'use strict'
const Db = use('Database')
const Env = use('Env')

class KamusController {
    async index({view,response}){
        const resp = {
            status  : true,
            title   : "Kamus Kata",
            html   : view.render('kamus.index')
        }
        return response.json(resp)
    }

    async all({response}){
        const stopwords = await Db.select('kata').table(Env.get('tbl_stopword')).orderBy('kata', 'asc')
        const slangwords = await Db.select('kata','kata_ganti').table(Env.get('tbl_slangword')).orderBy('kata', 'asc')
        const rootwords = await Db.select('kata').table(Env.get('tbl_rootword')).orderBy('kata', 'asc')
        const resp = {
            status      : true,
            stopwords   : stopwords,
            slangwords  : slangwords,
            rootwords   : rootwords
        }
        return response.json(resp)
    }
    
}

module.exports = KamusController
