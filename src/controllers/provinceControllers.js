import { provinceExist } from '../helpers/exists'
import {Province} from '../models'

// add new province
const addProvince = async(req, res)=>{
    const {name, governor, total_district} = req.body

    try {
        // checking if sector exist or not
        const exist = await provinceExist(name)
        if(exist){
            return res.status(400).json({message:`Province ${name} already exists in this country`})
        }
        
        const province= await Province.create({name, governor, total_district})
        if(province){
            return res.status(201).json({success:true,status:200,province:province})
        }
        return res.status(404).json({success:false, msg:"province not created!"})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

// updating province
const editProvince = async(req, res)=>{
    const {name, governor, total_district } = req.body
    const {provinceUuid} = req.params

    const province = await Province.findOne({where:{uuid:provinceUuid}})
    if(province){
        province.name = name || province.name
        province.governor = governor || province.governor
        province.total_district = total_district || province.total_district

        await province.save()

        return res.status(200).json({success:true, status:200, province, msg:"Province updated successfully!"})
    }else{
        return res.status(404).json({success:false, msg:"Province of that uuid is not found!"})
    }
}
// list single province
const getSingleProvince = async(req, res)=>{
    try {
        const {provinceUuid} = req.params

        const province = await Province.findOne({where:{uuid:provinceUuid}, include: ['districts']})
        if(province){
            return res.status(200).json({success:true, status:200, province})
        }else{
            return res.status(404).json({success:false, msg:"Province of that uuid is not found!"})
        }
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
}

// listing all provinces
const getAllProvinces = async(req, res)=>{
    try {
        const provinces = await Province.findAll({include: ['districts']})
        if(provinces){
            return res.status(200).json({success:true, status:200, count: provinces.length, provinces})
        }
        return res.status(404).json({success:false, msg:"provinces not found!"})

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
}

export {
    addProvince, editProvince, getAllProvinces, getSingleProvince
}