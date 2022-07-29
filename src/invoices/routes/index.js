const express = require("express");
/* const {
    verifySession,
} = require("supertokens-node/recipe/session/framework/express"); */

const { getInvoices, getInvoice, createInvoice, updateInvoice, deleteInvoice } = require("../services/index");

const router = express.Router();

router.get("/", getInvoices);
router.get("/:id", getInvoice);
router.post("/", createInvoice);
router.put("/:id", updateInvoice);
router.delete("/:id", deleteInvoice);

module.exports = router;
