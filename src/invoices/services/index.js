/* eslint-disable no-console */
const invoiceModels = require("../db/models/index");

const getInvoices = async (req, res) => {
    const userId = req.session.getUserId();
    const query = { userId };
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
    const invoiceId = req.params.id;

    const invoice = await invoiceModels.getOne(invoiceId);

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

    return res.status(200).send({ invoice });
};

const createInvoice = async (req, res) => {
    const invoice = req.body;
    const userId = req.session.getUserId();
    const invoicePlusUserId = { ...invoice, userId };
    const invoiceCreated = await invoiceModels.create(invoicePlusUserId);

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
    const invoiceId = req.params.id;
    const invoice = req.body;
    const userId = req.session.getUserId();
    const invoicePlusUserId = { ...invoice, userId };

    const invoiceUpdated = await invoiceModels.update(
        invoiceId,
        invoicePlusUserId
    );

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

    return res.status(200).send({ invoiceUpdated: "Updated correct" });
};

const deleteInvoice = async (req, res) => {
    const invoiceId = req.params.id;

    const invoiceDeleted = await invoiceModels.remove(invoiceId);

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

    return res.status(200).send({ invoiceDeleted: "Deleted correct" });
};

// This function is just for testing purposes
const deleteAllInvoices = async (req, res) => {
    const query = {};
    const numberOfInvoicesDeleted = await invoiceModels.deleteAll(query);

    if (!numberOfInvoicesDeleted) {
        return res.status(500).send({
            code: "bad-request",
            message: "There is a problem with the server",
        });
    }

    if (numberOfInvoicesDeleted.deletedCount === 0) {
        return res.status(404).send({
            code: "not-found",
            message: "There is no more invoices for delete",
        });
    }

    return res.status(200).send({ numberOfInvoicesDeleted });
};

module.exports = {
    getInvoices,
    getInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice,
    deleteAllInvoices,
};
