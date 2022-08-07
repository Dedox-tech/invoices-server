/* eslint-disable no-console */
const mongoose = require("mongoose");
const InvoiceSchema = require("./InvoiceSchema");

const getAll = async (query) => {
    const invoiceModel = mongoose.model("invoice", InvoiceSchema);
    const result = await invoiceModel.find(query);
    return result;
};

const getOne = async (invoiceId) => {
    const filter = { _id: invoiceId };
    const invoiceModel = mongoose.model("invoice", InvoiceSchema);
    const result = await invoiceModel.findOne(filter);
    return result;
};

const create = async (invoice) => {
    const invoiceModel = mongoose.model("invoice", InvoiceSchema);
    const result = await invoiceModel.create(invoice);
    return result;
};

const update = async (invoiceId, invoice) => {
    const filter = { _id: invoiceId };
    const invoiceModel = mongoose.model("invoice", InvoiceSchema);
    const result = await invoiceModel.updateOne(filter, invoice);
    return result;
};

const remove = async (invoiceId) => {
    const filter = { _id: invoiceId };
    const invoiceModel = mongoose.model("invoice", InvoiceSchema);
    const result = await invoiceModel.deleteOne(filter);
    return result;
};

const deleteAll = async (query) => {
    const invoiceModel = mongoose.model("invoice", InvoiceSchema);
    const result = await invoiceModel.deleteMany(query);
    return result;
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
    deleteAll,
};
