/* eslint-disable no-console */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
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
const InvoicesRoutes = require("./src/invoices/routes/index");

// Init supertokens and the app
supertokens.init(superTokensConfig);
const app = express();
const port = 5000;

// Cors configuration
app.use(
    cors({
        origin: "http://localhost:3000",
        allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
        methods: ["GET", "PUT", "POST", "DELETE"],
        credentials: true,
    })
);

// General middlewares
app.use(express.json());
app.use(middleware());
app.use(errorHandler());

// Mongo connection
const password = process.env.PASSWORD_DB;
mongoose.connect(
    `mongodb+srv://tgl-invoices-api:${password}@cluster-invoices.yschn.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

// Checking connection works
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Connected successfully to MongoDB");
});

// Routes
app.use("/invoices", InvoicesRoutes);

// Testing routes
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

// Connect port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(superTokensConfig);
});
