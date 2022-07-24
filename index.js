/* eslint-disable no-console */
const express = require("express");
const cors = require("cors");
const supertokens = require("supertokens-node");
const EmailPassword = require("supertokens-node/recipe/emailpassword");
const {
    verifySession,
} = require("supertokens-node/recipe/session/framework/express");
const {
    middleware,
    errorHandler,
} = require("supertokens-node/framework/express");
const { superTokensConfig } = require("./src/auth/superTokensConfig");

supertokens.init(superTokensConfig);

const app = express();
const port = 5000;

app.use(
    cors({
        origin: "http://localhost:3000",
        allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
        methods: ["GET", "PUT", "POST", "DELETE"],
        credentials: true,
    })
);

app.use(middleware());
app.use(errorHandler());

app.get("/", verifySession(), async (req, res) => {
    const userId = req.session.getUserId();
    const userInfo = await EmailPassword.getUserById(userId);
    console.log(userId);
    console.log(userInfo);
    res.send("Hola mundo");
});

app.get("/hola-mundo", (req, res) => {
    res.send("Soy un get request sin auth!");
});

app.listen(port, () => {
    console.log("La app de prueba está corriendo en el puerto 5000");
    console.log(superTokensConfig);
});
