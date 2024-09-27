const { defineConfig } = require("cypress");

const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  env: {
    NEXT_PUBLIC_SITE_KEY: process.env.NEXT_PUBLIC_SITE_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
  },
  e2e: {
    baseUrl: "https://mayarafurtado-paliar-br-next-frontend.vercel.app",
  },
  chromeWebSecurity: false,
});
