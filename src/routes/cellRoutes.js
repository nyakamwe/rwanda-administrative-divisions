import express from "express";
const router = express.Router()
import {CellControllers} from '../controllers/cellControllers'

const cellControllers = new CellControllers()

router.get('/cells', cellControllers.getAllCells)
router.post('/cell', cellControllers.addCell)
router.get('/cells/:cellUuid', cellControllers.getSingleCell)
router.put('/cells/:cellUuid', cellControllers.editCell)
router.delete('/cells/:cellUuid', cellControllers.deleteCell)

export default router