
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import user from 'App/Models/user'

export default class UsersController {
    public async index({ }: HttpContextContract) {
        return user.all()
    }

    public async create({ }: HttpContextContract) {
    }

    public async store({ request }: HttpContextContract) {
        const new_user = request.only(['nome', 'email', 'password', 'empresa_id'])

        return user.create({ 
            nome: new_user.nome,
            email: new_user.email,
            password: new_user.password,
            empresa_id: new_user.empresa_id
        })  
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
