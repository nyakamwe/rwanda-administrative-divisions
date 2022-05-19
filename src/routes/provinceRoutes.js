import express from 'express'
import { addProvince, editProvince, getAllProvinces, getSingleProvince } from '../controllers/provinceControllers'
const router = express.Router()

router.post('/provinces', addProvince)
router.put('/provinces/:provinceUuid', editProvince)
router.get('/provinces', getAllProvinces)
router.get('/provinces/:provinceUuid', getSingleProvince)


export default router