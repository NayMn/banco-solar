import { pool } from '../database/connection.js'

const leerUsuarios = async () => {
    const { rows } = await pool.query('SELECT * FROM usuarios ORDER BY id;')
    return rows
}

const registrarUsuarios = async (nombre, balance) => {
    const querySql = {
        text: 'INSER INTO usuarios (nombre, balance) values ($1, $2) RETURNING *;',
        values: [nombre, balance]
    }
    const { rows } = await pool.query(querySql)
    return rows[0]
}

const actualizarUsuarios = async (id, nombre, balance) => {
    const querySql = {
        text: 'UPDATE SET nombre = $1, balance = $2 WHERE id = $3 RETURNING *;',
        values: [nombre, balance, id]
    }
    const { rows } = await pool.query(querySql)
    return rows[0]
}

const eliminarUsuarios = async (id) => {
    const querySql = {
        text: 'DELETE FROM usuarios WHERE id = $1 RETURNING *;',
        values: [id]
    }
    const { rows } = await pool.query(querySql)
    return rows[0]
}

export const usuariosModel = {
    leerUsuarios,
    registrarUsuarios,
    actualizarUsuarios,
    eliminarUsuarios

}
