const invoiceModels = require("../db/models/index");

const getInvoices = async (req, res) => {
    const query = {};
    const invoices = await invoiceModels.getAll(query);

    if (!invoices) {
        return res.status(500).send({
            code: "bad-request",
            message: "There is a problem with the server",
        });
    }

    if (invoices.length === 0) {
        return res.status(404).send({
            code: "not-found",
            message: "Not found invoices in the database",
        });
    }

    return res.status(200).send({ invoices });
};

const createInvoice = async (req, res) => {
    const invoice = req.body;

    const invoiceCreated = await invoiceModels.create(invoice);

    if (!invoiceCreated) {
        return res.status(500).send({
            code: "bad-request",
            message: "There is a problem with the server",
        });
    }

    if (!invoice) {
        return res.status(400).send({
            code: "bad-request",
            message: "Can't create the invoice. Check invoice info",
        });
    }

    return res.status(200).send({ invoiceCreated });
};

module.exports = {
    getInvoices,
    createInvoice,
};
