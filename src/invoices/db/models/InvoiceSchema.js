const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
    {
        addressFrom: String,
        cityFrom: String,
        zipCode: String,
        countryFrom: String,
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
