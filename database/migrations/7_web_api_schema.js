'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Env = use('Env')

class RiwayatAPISchema extends Schema {
  up () {
    this.create(Env.get('tbl_riwayat_api'), (table) => {
      table.increments('_id').primary()
      table.text('teks')
      table.string('prediksi_label', 255).notNullable()
      table.string('ip_address',20)
      table.timestamp('tgl_akses').notNullable().defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop(Env.get('tbl_riwayat_api'))
  }
}

module.exports = RiwayatAPISchema
