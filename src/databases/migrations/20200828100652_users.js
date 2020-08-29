

exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('user',table => {
      table.increments('id').notNullable();
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('senha').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
