'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Env = use('Env')

class AdminSchema extends Schema {
  up () {
    this.create(Env.get('tbl_admin'), (table) => {
      table.increments('_id').primary()
      table.string('nama', 50)
      table.string('username', 80).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamp('tgl_dibuat').notNullable().defaultTo(this.fn.now())
      table.timestamp('tgl_dirubah')
    })
  }

  down () {
    this.drop(Env.get('tbl_admin'))
  }
}

module.exports = AdminSchema
