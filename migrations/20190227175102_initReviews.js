exports.up = async function(knex, Promise) {
  await knex.schema.createTable("secondtestdb", table => {
    table
      .increments("review_id")
      .unsigned()
      .primary();
    table.integer("product_id").notNullable();
    table.string("author").notNullable();
    table.string("date").notNullable();
    table.integer("rating").notNullable();
    table.string("review").notNullable();
    table.string("product_name").notNullable();
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable("reviews");
};
