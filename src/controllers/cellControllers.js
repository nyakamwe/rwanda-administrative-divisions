import {Cell,Sector} from '../models'
import { cellExist } from '../helpers/exists'

export class CellControllers{

async getAllCells(req, res){
    const cells = await Cell.findAll()
    return res.status(200).json({successful:true,status:200,count:cells.length, cells})
}
 async addCell(req, res){
    const {name, executive, sedo, sectorUuid} = req.body
    const sector = await Sector.findOne({where:{uuid:sectorUuid}})
    try {

        // checking if cell exist or not
        const exist = await cellExist(name, sector.id)
        if(exist){
            return res.status(403).json({message:`Cell ${name} already exists in ${sector.name} sector`})
        }
        if(sector){
            const cell = await Cell.create({name, executive, sedo, sectorId:sector.id})
            return res.status(201).json({success:true, status:200, cell})
        }
        return res.status(404).json({success:false, msg:"cell not created!"})
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

async getSingleCell(req, res){
    try {
        const {cellUuid} = req.params

        const cell = await Cell.findOne({where:{uuid:cellUuid}})
        if(cell){
            return res.status(200).json({success:true, status:200, cell})
        }else{
            return res.status(404).json({success:false, msg:"Cell of that uuid is not found!"})
        }
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
}

async editCell(req, res){
    const {name, executive, sedo} = req.body
    const {cellUuid} = req.params

    const cell = await Cell.findOne({where:{uuid:cellUuid}})
    if(cell){
        cell.name = name || cell.name
        cell.executive = executive || cell.executive
        cell.sedo = sedo || cell.sedo

        await cell.save()

        return res.status(200).json({success:true, status:200, cell, msg:"Cell updated successfully!"})
    }else{
        return res.status(404).json({success:false, msg:"Cell of that uuid is not found!"})
    }
}

async deleteCell(req, res){
    const {cellUuid} = req.params
    
    const toBeDeleted = await Cell.findOne({where:{uuid:cellUuid}})
    if(toBeDeleted != null){
        const cell = await Cell.findByPk(toBeDeleted.id)

        // destroy method to remove item from database
        cell.destroy()

        return res.status(200).json({success:false, status:200, msg:"Cell deleted successfully!"})
    }else{
        return res.status(404).json({success:false, msg:"Cell of that uuid is not found!"})
    }
}
}
