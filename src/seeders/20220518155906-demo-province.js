'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('provinces',[
      {
        name:"umujyi wa kigali",
        governor:"RUBINGISA Pudence",
        total_district: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        name:"Amajyepfo",
        governor:"KAYITESI Alice",
        total_district: 8,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
  ])
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('provinces', null, {});

  }
};
