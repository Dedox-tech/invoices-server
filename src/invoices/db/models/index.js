const mongoose = require("mongoose");
const InvoiceSchema = require("./InvoiceSchema");

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

const deleteAll = async (query) => {
    const invoiceModel = mongoose.model("invoice", InvoiceSchema);
    const result = await invoiceModel.deleteMany(query);
    return result;
};

module.exports = {
    getAll,
    create,
    deleteAll,
};
