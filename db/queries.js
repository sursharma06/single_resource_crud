const knex = require('./knex');

module.exports = {
  recipes: {
    getAll: function () {
      return knex('recipes').orderBy('cooking_style');
    },

    create: function (recipe) {
      return knex('recipes').insert(recipe).returning('*');
    },
  },

};;
