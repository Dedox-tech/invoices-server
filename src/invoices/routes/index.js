import * as express from "express"
// eslint-disable-next-line import/extensions
import { getInvoices, createInvoice } from "../services/index.js"
// const { getInvoices, createInvoice } = import("../services/index")
// const express = require("express")

const router = express.Router()

router.get("/", getInvoices)
router.post("/", createInvoice)

export default router
// module.exports = router
