'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({District}) {
      // define association here
      this.hasMany(District, {foreignKey: 'provinceId', as: 'districts'})
    }

    toJSON(){
      return {...this.get(), id:undefined}
    }
  }
  Province.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    governor: {
      type:DataTypes.STRING,
      allowNull:false
    },
    total_district:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, 
  {
    sequelize,
    tableName: 'provinces',
    modelName: 'Province',
  });
  return Province;
};