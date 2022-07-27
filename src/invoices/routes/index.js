const express = require("express");

const { getInvoices, createInvoice } = require("../services/index");

const router = express.Router();

router.get("/", getInvoices);
router.post("/", createInvoice);

module.exports = router;