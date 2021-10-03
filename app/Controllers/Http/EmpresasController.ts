import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Empresa from 'App/Models/Empresa'

export default class EmpresasController {
  public async index({ }: HttpContextContract) {
    return Empresa.all()
  }

  public async create({ }: HttpContextContract) {

  }

  public async store({ request }: HttpContextContract) {
    const empresa = request.only(['cnpj', 'nome'])
    return Empresa.create({ nome: empresa.nome, cnpj: empresa.cnpj })
  }

  public async show({ }: HttpContextContract) {
  }

  public async edit({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
