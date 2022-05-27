import express from "express";
const router = express.Router()
import {getAllSectors,addSector, getSingleSector, editSector} from '../controllers/sectorControllers'

router.get('/sectors', getAllSectors)
router.post('/sectors', addSector)
router.get('/sectors/:sectorUuid', getSingleSector)
router.put('/sectors/:sectorUuid', editSector)


export default router