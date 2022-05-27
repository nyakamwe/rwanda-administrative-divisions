const {Sector, District, Province} = require("../models");


export async function sectorExist(name, id){
    const sector = await Sector.findOne({where:{name, districtId:id}})
    return sector
}

export async function districtExist(name, id){
    const district = await District.findOne({where:{name, provinceId:id}})
    return district
}

export async function provinceExist(name){
    const province = await Province.findOne({where:{name}})
    return province
}