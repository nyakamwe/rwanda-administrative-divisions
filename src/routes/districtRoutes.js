import express from 'express'
import {getAllDistricts, addDistrict, getSingleDistrict, editDistrict} from '../controllers/districtContollers'

const router = express.Router()

router.get('/districts', getAllDistricts)
router.post('/districts', addDistrict)
router.get('/districts/:districtUuid', getSingleDistrict)
router.put('/districts/:districtUuid', editDistrict)

export default router