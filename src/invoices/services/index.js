const invoiceModels = require("../db/models/index");

const getInvoices = async (req, res) => {
    const query = {};
    const invoices = await invoiceModels.getAll(query);

    if (!invoices) {
        return res.status(500).send({
            code: "internal-error",
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

const getInvoice = async (req, res) => {
    const invoiceId = req.params.id

    const invoice = invoiceModels.getOne(invoiceId)

    if (!invoice) {
        return res.status(500).send({
            code: "internal-error",
            message: "There is a problem with the server",
        });
    }

    if (invoice.length === 0) {
        return res.status(404).send({
            code: "not-found",
            message: `Not found invoice with id: ${invoiceId} in the database`,
        });
    }

    return res.status(200).send({ invoice })
}

const createInvoice = async (req, res) => {
    const invoice = req.body;

    const invoiceCreated = await invoiceModels.create(invoice);

    if (!invoiceCreated) {
        return res.status(500).send({
            code: "internal-error",
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

const updateInvoice = async (req, res) => {
    const invoiceId = req.params.id
    const invoice = req.body

    const invoiceUpdated = invoiceModels.update(invoiceId, invoice)

    if (!invoiceUpdated) {
        return res.status(500).send({
            code: "internal-error",
            message: "There is a problem with the server",
        });
    }

    if (!invoiceId) {
        return res.status(400).send({
            code: "bad-request",
            message: `Can't update the invoice. Check invoice id: ${invoiceId}`,
        });
    }

    if (!invoice) {
        return res.status(400).send({
            code: "bad-request",
            message: "Can't update the invoice. Check invoice info",
        });
    }

    return res.status(200).send({ invoiceUpdated: "Updated correct" })
}

const deleteInvoice = async (req, res) => {
    const invoiceId = req.params.id

    const invoiceDeleted = invoiceModels.remove(invoiceId)

    if (!invoiceDeleted) {
        return res.status(500).send({
            code: "internal-error",
            message: "There is a problem with the server",
        });
    }

    if (!invoiceId) {
        return res.status(400).send({
            code: "bad-request",
            message: `Can't delete the invoice. Check invoice id: ${invoiceId}`,
        });
    }

    return res.status(200).send({ invoiceDeleted: "Deleted correct" })
}

module.exports = {
    getInvoices,
    getInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice
};
