import mongoose from "mongoose";
import InvoiceSchema from "./InvoiceSchema";

const getAll = async (query) => {
    const invoiceModel = mongoose.model("invoice", InvoiceSchema);
    const result = await invoiceModel.find(query);
    return result;
};

const create = async (invoice) => {
    const invoiceModel = mongoose.model("invoice", InvoiceSchema);
    const result = await invoiceModel.create(invoice);
    return result;
};

export { getAll, create };
