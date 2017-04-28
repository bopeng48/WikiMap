exports.up = function(knex) {
return knex.schema.createTable("points", (table) => {
    table.increments();
    table.string("title");
    table.string("description");
    table.string("img");
    table.integer("map_id");
    table.foreign("map_id").references("id").inTable("maps").onDelete("CASCADE");
    table.float("lat");
    table.float("long");
    table.integer("user_id");
    table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("points");
};
