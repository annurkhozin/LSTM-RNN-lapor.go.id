'use strict'
const Env = use('Env')
const db = use('Database')
const md5 = use('md5')

class AdminSeeder {
  async run () {
    const admin = [
      { 
        nama: 'Nur Khozin',
        username: 'root',
        password: md5('root')
      }
    ]
    await db.table(Env.get('tbl_admin')).insert(admin)
  }
}

module.exports = AdminSeeder
