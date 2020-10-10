'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Env = use('Env')

class DatasetSchema extends Schema {
  up () {
    this.create(Env.get('tbl_dataset'), (table) => {
      table.increments('_id').primary()
      table.text('teks')
      table.string('kelas', 100).notNullable()
      table.integer('scraping_id').unsigned().references('_id').inTable(Env.get('tbl_scraping_dataset'))
      table.timestamp('tgl_dibuat').notNullable().defaultTo(this.fn.now())
    })
  }

  down () {
    this.drop(Env.get('tbl_dataset'))
  }
}

module.exports = DatasetSchema
