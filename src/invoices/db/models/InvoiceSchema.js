import mongoose from "mongoose";

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

export default InvoiceSchema;
