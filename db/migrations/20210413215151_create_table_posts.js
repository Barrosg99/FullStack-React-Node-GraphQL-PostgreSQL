
exports.up = function (knex) {
  return knex.schema
    .createTable('posts', function (table) {
      table.increments().primary()
      table.string('title', 255).notNullable()
      table.string('body', 255).notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
    });
};

exports.down = function (knex) {
  return knex.dropTable('posts');
};
