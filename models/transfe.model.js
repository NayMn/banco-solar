import { pool } from '../database/connection.js'

const transferencia = async () => {
    const { rows } = await pool.query(
        'SELECT t.id AS transferencia_id, t.emisor, u_emisor.nombre AS nombre_emisor, ' +
        't.receptor, u_receptor.nombre AS nombre_receptor, t.monto, t.fecha' +
        'FROM transferencias t' +
        'JOIN usuarios u_emisor ON t.emisor = u_emisor.id' +
        'JOIN usuarios u_receptor ON t.receptor = u_receptor.id'
    )
    return rows
}

const transferenciaDos = async (emisor, receptor, monto) => {
    const querySql = {
        text: 'INSERT INTO transferencia (emisor, receptor, monto) VALUES ($1, $2, $3) RETURNING *; ',
        values: [emisor, receptor, monto]
    }
    const querySqlDos = {
        text: 'UPDATE usuarios SET balance = balance - $1 WHERE id = $2',
        values: [monto, emisor]
    }
    const querySqlTres = {
        text: 'UPDATE usuarios SET balace = balance - $1 WHERE id  = $2',
        values: [monto, receptor]
    }


    try {
        await pool.query('BEGIN');
        const { rows } = await pool.query(querySql);
        await pool.query(querySqlDos);
        await pool.query(querySqlTres);
        await pool.query('COMMIT');
        return rows[0]



    } catch (error) {
        await pool.query('ROOLBACK')
        throw error

    }
}


export const transferenciaModel = {
    transferencia,
    transferenciaDos
}