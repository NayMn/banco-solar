import { usuariosModel } from "../models/usuarios.model.js";

const verUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosModel.leerUsuarios()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: 'No se puede mostrar la informacion'
        })
    }
}

const crearUsuario = async (req, res) => {
    try {
        const { nombre, balance } = req.body
        const usuarioCreado = await usuariosModel.registrarUsuarios(nombre, balance)
        return res.json(usuarioCreado)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: 'no se puede registrar la informacion'
        })
    }
}


const editarUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, balance } = req.body
        const editarU = await usuariosModel.actualizarUsuarios(id, nombre, balance)
        return res.json(editarU)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: 'no se puede actualizar la informacion'
        })
    }
}

const removerUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const removerU = await usuariosModel.eliminarUsuarios(id)
        return res.json(removerU)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: 'no se puede eliminar la informacion'
        })

    }
}

export const usuariosController = {
    verUsuarios,
    crearUsuario,
    editarUsuario,
    removerUsuario
}


