import mongoose from "mongoose"
// const mongoose = require("mongoose")
// eslint-disable-next-line import/extensions
import InvoiceSchema from "./InvoiceSchema.js"
// const InvoiceSchema = import("./InvoiceSchema")

const getAll = async (query) => {
    const invoiceModel = mongoose.model("invoice", InvoiceSchema)
    const result = await invoiceModel.find(query)
    return result
}

const create = async (invoice) => {
    const invoiceModel = mongoose.model("invoice", InvoiceSchema)
    const result = await invoiceModel.create(invoice)
    return result
}


export {
    getAll, create
}
/* module.exports = {
    getAll, create
} */