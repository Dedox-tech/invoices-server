/* eslint-disable no-console */
const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.listen(port, () => {
    console.log("La app de prueba está corriendo en el puerto 5000");
});
