import 'dotenv/config'
import pg from 'pg'
const { Pool } = pg

export const pool = new Pool({
    allowExitOnIdle: true,
    connectionString: process.env.CONNECTION_STRING
})

try {
    await pool.query("SELECT NOW()")
    console.log('conectado a base de datos ...')
} catch (error) {
    console.log(error)

}