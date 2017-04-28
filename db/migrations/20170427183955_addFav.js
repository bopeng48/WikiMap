exports.up = function(knex) {
return knex.schema.createTable("favourites", (table) => {
    table.increments();
    table.integer("user_id").unsigned();
    table.integer("map_id").unsigned();
    table.foreign("user_id").references("id").inTable("users").onDelete('CASCADE');
    table.foreign("map_id").references("id").inTable("maps").onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("favourites");
};
