import {Province, District} from '../models'


// listing all districts
const getAllDistricts = async(req, res)=>{
    try {
        const districts = await District.findAll({include:['province']})
        if(districts){
            return res.status(200).json({success:true, status:200, districts})
        }
        return res.status(404).json({success:false, msg:"districts not found!"})

    } catch (error) {
        return res.status(400).json({error:error.message})
    }
    
}

// add new district
const addDistrict = async(req, res)=>{
    const {name, mayor, total_sectors, provinceUuid} = req.body

    try {
        const province= await Province.findOne({where:{uuid:provinceUuid}})
        if(province){
            const district = await District.create({name, mayor, total_sectors, provinceId:province.id})
            return res.status(201).json({success:true,status:200,district})
        }
        return res.status(404).json({success:false, msg:"district not created!"})
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

// list single district
const getSingleDistrict = async(req, res)=>{
    try {
        const {districtUuid} = req.params

        const district = await District.findOne({where:{uuid:districtUuid}, include:['province']})
        if(district){
            return res.status(200).json({success:true, status:200, district})
        }else{
            return res.status(404).json({success:false, msg:"District of that uuid is not found!"})
        }
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
}

// updating district
const editDistrict = async(req, res)=>{
    const {name, mayor, total_sectors} = req.body
    const {districtUuid} = req.params

    const district = await District.findOne({where:{uuid:districtUuid}})
    if(district || province){
        district.name = name || district.name
        district.mayor = mayor || district.mayor
        district.total_sectors = total_sectors || district.total_sectors

        await district.save()

        return res.status(200).json({success:true, status:200, district, msg:"District updated successfully!"})
    }else{
        return res.status(404).json({success:false, msg:"District of that uuid is not found!"})
    }
}

export {
    getAllDistricts, addDistrict, getSingleDistrict, editDistrict
}