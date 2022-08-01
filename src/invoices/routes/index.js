const express = require("express");
const {
    verifySession,
} = require("supertokens-node/recipe/session/framework/express");

const {
    getInvoices,
    getInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice,
    deleteAllInvoices,
} = require("../services/index");

const router = express.Router();

router.get("/", verifySession(), getInvoices);
router.get("/:id", getInvoice);
router.post("/", createInvoice);

router.put("/:id", updateInvoice);
router.delete("/:id", deleteInvoice);

router.delete("/all", deleteAllInvoices);

module.exports = router;
