/* eslint-disable no-console */
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"
// eslint-disable-next-line import/extensions
import InvoicesRoutes from "./src/invoices/routes/index.js"
// const express = require("express");
// const cors = require("cors")
// const mongoose = require("mongoose")
// require("dotenv").config()

// const InvoicesRoutes = import("./src/routes/index")

const app = express();
const port = 5000;

app.use(express.json())
app.use(cors())

// Mongo connection
const password = process.env.PASSWORD_DB

mongoose.connect(`mongodb+srv://tgl-invoices-api:${password}@cluster-invoices.yschn.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Checking connection works
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Connected successfully to MongoDB");
});

// Connect port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Routes
app.use("/invoices", InvoicesRoutes);
// console.log(InvoicesRoutes);
