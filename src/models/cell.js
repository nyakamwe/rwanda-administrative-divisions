'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Sector}) {
      // define association here
      this.belongsTo(Sector, {foreignKey:'sectorId', onDelete:'CASCADE'})
    }
    toJSON(){
      return {
        ...this.get(), id:undefined, sectorId:undefined
      }
    }
  }
  Cell.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    executive: {
      type:DataTypes.STRING,
    },
    sedo:DataTypes.STRING,
  },{
    sequelize,
    tableName: 'cells',
    modelName: 'Cell',
  });
  return Cell;
};