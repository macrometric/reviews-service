module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      user: "sms",
      database: "sdc-database"
    },
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  }
};
