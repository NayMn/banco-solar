import { Router } from "express";
import { usuariosController } from "../controllers/usuarios.controller.js";
const router = Router()

router.get('/usuarios', usuariosController.verUsuarios);
router.post('/usuario', usuariosController.crearUsuario);
router.put('/usuario/:id', usuariosController.editarUsuario);
router.delete('/usuario/:id', usuariosController.removerUsuario);

export const routerUsuario = router