exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes')
        .insert([{

            cooking_style: 'Vegetarian',
            meal_type: 'Breakfast',
            cuisine_type: 'Southern',
          },
          {

            cooking_style: 'Non Vegetarian',
            meal_type: 'Lunch',
            cuisine_type: 'Mexican',
          },
          {

            cooking_style: 'Vegan',
            meal_type: 'Dinner',
            cuisine_type: 'Italian',
          },
        ]);
    })
    .then(function () {
      return knex.raw("SELECT setval('recipes_id_seq', (SELECT MAX(id) FROM recipes));");
    });

};
