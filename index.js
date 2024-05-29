import express from 'express'
import 'dotenv/config'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { routerTrasfe } from './routes/transfe.route.js'
import { routerUsuario } from './routes/usuario.route.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(__dirname + '/public'))

app.use('/', routerTrasfe)
app.use('/', routerUsuario)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('servidor escuchando ...')
})