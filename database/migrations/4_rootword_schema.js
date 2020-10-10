'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Env = use('Env')

class RootwordSchema extends Schema {
  up () {
    this.create(Env.get('tbl_rootword'), (table) => {
      table.increments('_id').primary()
      table.string('kata', 33).notNullable()
      table.timestamp('tgl_dibuat').notNullable().defaultTo(this.fn.now())
      table.timestamp('tgl_dirubah')
    })
  }

  down () {
    this.drop(Env.get('tbl_rootword'))
  }
  
}

module.exports = RootwordSchema
