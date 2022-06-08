'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({District,Cell}) {
      // define association here
      this.belongsTo(District, {foreignKey:'districtId', as:'district', onDelete:'CASCADE'})
      this.hasMany(Cell, {foreignKey:'sectorId', onDelete:'CASCADE'})
    }
    toJSON(){
      return {...this.get(), id:undefined, districtId:undefined}
    }
  }
  Sector.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    executive: {
      type:DataTypes.STRING,
    },
    population: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'sectors',
    modelName: 'Sector',
  });
  return Sector;
};