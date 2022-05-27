'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('sectors', {
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
        type: DataTypes.STRING
      },
      executive: {
        type: DataTypes.STRING
      },
      population: {
        type: DataTypes.STRING
      },
      districtId:{
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
    await queryInterface.dropTable('Sectors');
  }
};