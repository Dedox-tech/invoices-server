const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
    {
        addressFrom: String,
        cityFrom: String,
        zipCodeFrom: Number,
        countryFrom: String,
        customerName: String,
        customerEmail: String,
        customerAddress: String,
        customerCity: String,
        customerZipCode: String,
        customerCountry: String,
        invoiceDate: String,
        invoiceStatus: String,
        amountToPay: Number,
        description: String,
        userId: String,
    },
    {
        id: true,
        toJSON: {
            virtuals: true,
            versionKey: true,
        },
        timestamps: true,
    }
);

module.exports = InvoiceSchema;
