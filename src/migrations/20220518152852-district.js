'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('districts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
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
      provinceId:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('districts');
  }
};