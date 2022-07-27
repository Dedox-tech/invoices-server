/* eslint-disable no-console */
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import supertokens from "supertokens-node";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import { middleware, errorHandler } from "supertokens-node/framework/express";
import superTokensConfig from "./src/auth/superTokensConfig";
import InvoicesRoutes from "./src/invoices/routes/index";

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

// App Routes
app.use("/invoices", InvoicesRoutes);

// Connect port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(superTokensConfig);
});
