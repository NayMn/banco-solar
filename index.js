import express from 'express'
import 'dotenv/config'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.json({ ok: true })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('servidor escuchando ...')
})