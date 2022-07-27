const express = require("express");

const {
    getInvoices,
    createInvoice,
    deleteAllInvoices,
} = require("../services/index");

const router = express.Router();

router.get("/", getInvoices);
router.post("/", createInvoice);
router.delete("/all", deleteAllInvoices);

module.exports = router;
