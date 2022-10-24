'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Courses', 
        'cost', 
        {
          type: Sequelize.DECIMAL,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Courses', 'cost'),
    ]);
  },
};