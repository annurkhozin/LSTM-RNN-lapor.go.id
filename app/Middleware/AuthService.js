'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const db = use("Database")
const Env = use("Env")

class AuthService {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, session, response,view }, next) {

    const UserNameKey = session.get('sessionKey')
    if(!UserNameKey){
      const resp = {
          status  : false,
          title   : "Halaman Login",
          html   : view.render('login')
      }
      return response.json(resp)
    }else{
      const where = {
        _id : UserNameKey
      }
      const get_user = await db.table(Env.get('tbl_admin')).where(where).first()
      if(get_user){
        view.share({
          session_nama: get_user['nama']
        })
        await next()
      }else{
        const resp = {
          status  : false,
          title   : "Halaman Login",
          html   : view.render('login')
        }
        return response.json(resp)
      }
    }

  }
}

module.exports = AuthService
