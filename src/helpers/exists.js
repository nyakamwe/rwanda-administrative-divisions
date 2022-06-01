const {Sector, District, Province, Cell} = require("../models");


export async function sectorExist(name, districtId){
    const sector = await Sector.findOne({where:{name, districtId}})
    return sector
}

export async function districtExist(name, provinceId){
    const district = await District.findOne({where:{name, provinceId}})
    return district
}

export async function provinceExist(name){
    const province = await Province.findOne({where:{name}})
    return province
}

export async function cellExist(name, id){
    return await Cell.findOne({where:{name, sectorId:id}})
}