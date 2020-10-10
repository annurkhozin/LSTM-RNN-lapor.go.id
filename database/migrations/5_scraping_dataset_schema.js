'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Env = use('Env')

class ScrapingDatasetSchema extends Schema {
  up () {
    this.create(Env.get('tbl_scraping_dataset'), (table) => {
      table.increments('_id').primary()
      table.string('lapor_id',15)
      table.string('user_pelapor',100)
      table.string('judul_laporan',255)
      table.text('isi_laporan')
      table.string('channel_laporan',33)
      table.string('instansi_laporan', 255)
      table.string('url_laporan', 255)
      table.string('tgl_laporan', 33)
      table.timestamp('tgl_dibuat').notNullable().defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop(Env.get('tbl_scraping_dataset'))
  }
}

module.exports = ScrapingDatasetSchema
