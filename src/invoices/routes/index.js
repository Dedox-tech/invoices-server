import express from "express";
import { getInvoices, createInvoice } from "../services/index";

const router = express.Router();

router.get("/", getInvoices);
router.post("/", createInvoice);

export default router;
