const EmailPassword = require("supertokens-node/recipe/emailpassword");
const Session = require("supertokens-node/recipe/session");

const { superTokensKeys } = require("./superTokensKeys");
const { generalInfo } = require("./generalInfo");

const superTokensConfig = {
    framework: "express",
    supertokens: superTokensKeys,
    appInfo: generalInfo,
    recipeList: [EmailPassword.init(), Session.init()],
};

module.exports = { superTokensConfig };
