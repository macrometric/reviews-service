exports.up = async function(knex, Promise) {
  await Promise.all([
    knex.schema.createTable("reviews", table => {
      table
        .increments("review_id")
        .unsigned()
        .primary();
      table.integer("product_id").notNullable();
      table.string("date").notNullable();
      table.integer("rating").notNullable();
      table.string("review").notNullable();
    }),
    knex.schema.createTable("products", table => {
      table
        .increments("product_id")
        .unsigned()
        .primary();
      table.string("product_name").notNullable();
    }),
    knex.schema.createTable("users", table => {
      table
        .increments("review_id")
        .unsigned()
        .primary();
      table.string("author").notNullable();
    })
  ]);
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable("reviews");
};
