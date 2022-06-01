import { sectorExist } from "../helpers/exists"
import {Sector, District} from "../models"

//list all sectors
const getAllSectors = async(req, res)=>{
    try {
        const sectors = await Sector.findAll()
        return res.status(200).json({success:true, sectors})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }

}

// add new sector
const addSector = async(req, res)=>{
    const {name, executive, population, districtUuid} = req.body
    const district= await District.findOne({where:{uuid:districtUuid}})
    console.log(district.id)
    try {

        // checking if sector exist or not
        const exist = await sectorExist(name, district.id)
       
        if(exist){
            return res.status(403).json({message:`Sector ${name} already exists in ${district.name} district`})
        }
        if(district){
            const sector = await Sector.create({name, executive, population, districtId:district.id})
            return res.status(201).json({success:true, status:200, sector})
        }
        return res.status(404).json({success:false, msg:"sector not created!"})
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

// list single sector
const getSingleSector = async(req, res)=>{
    try {
        const {sectorUuid} = req.params

        const sector = await Sector.findOne({where:{uuid:sectorUuid}, include:'district'})
        if(sector){
            return res.status(200).json({success:true, status:200, sector})
        }else{
            return res.status(404).json({success:false, msg:"Sector of that uuid is not found!"})
        }
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
}

// updating sector
const editSector = async(req, res)=>{
    const {name, executive, population} = req.body
    const {sectorUuid} = req.params

    const sector = await Sector.findOne({where:{uuid:sectorUuid}})
    if(sector){
        sector.name = name || sector.name
        sector.executive = executive || sector.executive
        sector.population = population || sector.population

        await sector.save()

        return res.status(200).json({success:true, status:200, sector, msg:"Sector updated successfully!"})
    }else{
        return res.status(404).json({success:false, msg:"Sector of that uuid is not found!"})
    }
}

export  {
    getAllSectors, addSector, getSingleSector, editSector
}