module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", `${process.env.MYSQLHOST}`),
      port: env.int("DATABASE_PORT", `${process.env.MYSQLPORT}`),
      database: env("DATABASE_NAME", `${process.env.MYSQLNAME}`),
      user: env("DATABASE_USERNAME", `${process.env.MYSQLUSERNAME}`),
      password: env("DATABASE_PASSWORD", `${process.env.MYSQLPASSWORD}`),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
