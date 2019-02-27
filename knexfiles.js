module.exports = {
  development: {
    client: "postgressql",
    connection: `postgres://localhost:5432/${databaseName}`,
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  }
};
