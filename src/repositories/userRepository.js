import { usuarioDao } from "../dao/daoFactory.js";
import { usuarioModel } from "../dao/MongooseManagers/userModel.js";
import { User } from "../models/entidades/User.js";

class UsuariosRepository{
    constructor(dao){
        this.dao = dao
    }

    async createUser(datosUsuario){
        //let nuevoUsuario = new User(datosUsuario)
        return await this.dao.crearUsuario(datosUsuario)
    }

    async cambiarContra(contra, id){
        console.log("entre al userRepository")
        await this.dao.cambiarContra(contra, id)
    }
}

export const usuariosRepository = new UsuariosRepository(usuarioDao)
//export const usuariosRepository = new UsuariosRepository()