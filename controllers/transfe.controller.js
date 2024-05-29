import { transferenciaModel } from "../models/transfe.model.js";

const transfer = async (req, res) => {
    try {
        const usuarios = await transferenciaModel.transferencia()
        return res.json(usuarios)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: 'error en el servidor'
        })
    }
}

const transferNew = async (req, res) => {
    try {
        const { emisor, receptor, monto } = req.body
        const transfe = await transferenciaModel.transferenciaDos(emisor, receptor, monto)
        return res.json(transfe)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: 'error en el servidor'

        })

    }
}

export const transfeController = {
    transfer,
    transferNew
}