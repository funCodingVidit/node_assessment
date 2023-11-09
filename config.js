// Fetch the environment details
const environment = process.env.NODE_ENV;

const config = {
  dev: {
    db: {
      url: "mongodb+srv://vidit:test123@cluster0.fxomsdy.mongodb.net/bookstore",
    },
  },
  prod: {
    db: {
      url: "PASTE_ATLAS_URL",
    },
  },
};

export default environment === "dev" ? config.dev : config.prod;