import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Empresas extends BaseSchema {
  protected tableName = 'empresas'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
     
      table.string('cnpj').notNullable().unique().alter()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}