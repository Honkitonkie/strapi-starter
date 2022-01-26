// module.exports = ({ env }) => ({
//   connection: {
//     client: "mysql",
//     connection: {
//       host: env("DATABASE_HOST", `${process.env.MYSQLHOST}`),
//       port: env.int("DATABASE_PORT", `${process.env.MYSQLPORT}`),
//       database: env("DATABASE_NAME", `${process.env.MYSQLNAME}`),
//       user: env("DATABASE_USERNAME", `${process.env.MYSQLUSERNAME}`),
//       password: env("DATABASE_PASSWORD", `${process.env.MYSQLPASSWORD}`),
//       ssl: env.bool("DATABASE_SSL", false),
//     },
//   },
// });
const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
 
