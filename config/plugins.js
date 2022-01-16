module.exports = ({ env }) => ({
  //
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: `${process.env.CLOUDINARY_NAME}`,
      api_key: `${process.env.CLOUDINARY_KEY}`,
      api_secret: `${process.env.CLOUDINARY_SECRET}`,
    },
  },
});
