import { Router } from "express";
import { transfeController } from "../controllers/transfe.controller.js";
const router = Router()

router.get('/transferencias', transfeController.transfer)
router.post('/transferencia', transfeController.transferNew)

export const routerTrasfe = router
