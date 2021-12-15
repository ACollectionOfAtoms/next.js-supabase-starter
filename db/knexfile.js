let prod = {
  dbHost: process.env["PROD_DB_HOST"],
  dbName: process.env["PROD_DB_NAME"],
  dbPort: process.env["PROD_DB_PORT"],
  dbUser: process.env["PROD_DB_USER"],
  dbPw: process.env["PROD_DB_PW"],
};

let stage = {
  dbHost: process.env["STAGE_DB_HOST"],
  dbName: process.env["STAGE_DB_NAME"],
  dbPort: process.env["STAGE_DB_PORT"],
  dbUser: process.env["STAGE_DB_USER"],
  dbPw: process.env["STAGE_DB_PW"],
};

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //     directory: "migrations",
  //   },
  // },

  production: {
    client: "postgresql",
    connection: {
      host: prod.dbHost,
      port: prod.dbPort,
      database: prod.dbName,
      user: prod.dbUser,
      password: prod.dbPw,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },
};
