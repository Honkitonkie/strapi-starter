module.exports = ({ env }) => ({
  host: env("HOST", `${process.env.HOST}`),
  port: env.int("PORT", `${process.env.PORT}`),
});
