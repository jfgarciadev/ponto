import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Empresas extends BaseSchema {
  protected tableName = 'empresas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('cnpj').notNullable()
      table.string('nome').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
