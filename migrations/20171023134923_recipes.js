exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', function (table) {
    table.increments('id').primary();
    table.string('cooking_style').notNullable().defaultTo('');
    table.string('meal_type').notNullable().defaultTo('');
    table.string('cuisine_type').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('recipes');
};
