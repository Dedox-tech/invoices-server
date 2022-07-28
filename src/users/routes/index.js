const express = require("express");
const {
    verifySession,
} = require("supertokens-node/recipe/session/framework/express");
const { getUserData } = require("../services/index");

const router = express.Router();

router.get("/current", verifySession(), getUserData);

module.exports = router;
