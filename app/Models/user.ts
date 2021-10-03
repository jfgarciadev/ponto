import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  HasOne,
  hasOne
} from '@ioc:Adonis/Lucid/Orm'
import Empresa from './Empresa'

export default class user extends BaseModel {
  @hasOne(() => Empresa, {
    foreignKey: 'id'
  })
  public empresa: HasOne<typeof Empresa>
  


  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public nome: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public empresa_id?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: user) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
