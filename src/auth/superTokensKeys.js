require("dotenv").config();

const superTokensKeys = {
    connectionURI: process.env.CONNECTION_URI,
    apiKey: process.env.API_KEY,
};

module.exports = { superTokensKeys };
