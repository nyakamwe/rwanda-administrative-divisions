'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */ 
    static associate({Province, Sector}) {
      // define association here
      this.belongsTo(Province, {foreignKey: 'provinceId', as:'province', onDelete:'CASCADE'})
      this.hasMany(Sector, {foreignKey: 'districtId', as:'sectors', onDelete:'CASCADE'})
    }
    // override toJSON method
    toJSON(){
      return {...this.get(), id:undefined, provinceId:undefined}
    }
  }
  District.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    mayor: {
      type:DataTypes.STRING,
      allowNull:false
    },
    total_sectors:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    tableName: 'districts',
    modelName: 'District',
  });
  return District;
};