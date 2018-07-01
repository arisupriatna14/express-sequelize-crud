'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const date = new Date()
    return queryInterface.bulkInsert("Teachers", [{
      first_name: "Bambang" ,
      last_name: "Suprapto",
      createdAt: date,
      updatedAt: date,
      email: "bambangsuprapto@sekolah.id",
    }, 
    {
      first_name: "Rukma" ,
      last_name: "Fatmawati",
      createdAt: date,
      updatedAt: date,
      email: "rukmafatmawati@sekolah.id",
    },
    {
      first_name: "Butet" ,
      last_name: "Naiborhu",
      createdAt: date,
      updatedAt: date,
      email: "butetnaiborhu@sekolah.id",
    }, 
    {
      first_name: "Yulius" ,
      last_name: "Prawiranegara",
      createdAt: date,
      updatedAt: date,
      email: "yuliusprawiranegara@sekolah.id",
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
