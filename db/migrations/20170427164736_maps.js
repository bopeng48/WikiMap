exports.up = function(knex) {
return knex.schema.createTable("maps", (table) => {
    table.increments();
    table.string("title");
    table.string("description");
    table.integer('user_id');
    table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("maps");
};
