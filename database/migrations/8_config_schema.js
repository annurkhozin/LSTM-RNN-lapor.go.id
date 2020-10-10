'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Env = use('Env')

class ConfigSchema extends Schema {
  up () {
    this.create(Env.get('tbl_config'), (table) => {
      table.increments('_id').primary()
      table.boolean('scraping_status').defaultTo(false)
      table.integer('scraping_page').defaultTo(1)
    })
  }

  down () {
    this.drop(Env.get('tbl_config'))
  }
  
}

module.exports = ConfigSchema
