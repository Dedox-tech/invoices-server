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
router.get("/:id", verifySession(), getInvoice);
router.post("/", verifySession(), createInvoice);

router.put("/:id", verifySession(), updateInvoice);
router.delete("/:id", verifySession(), deleteInvoice);

router.delete("/", verifySession(), deleteAllInvoices);

module.exports = router;
