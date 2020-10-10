'use strict'
const Env = use('Env')
const db = use('Database')

class ConfigSeeder {
  async run () {
    const config = [
      { 
        scraping_status: 0,
        scraping_page: 1
      }
    ]
    await db.table(Env.get('tbl_config')).insert(config)
  }
}

module.exports = ConfigSeeder
