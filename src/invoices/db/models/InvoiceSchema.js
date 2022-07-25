import mongoose from "mongoose"

// const mongoose = require("mongoose")

const InvoiceSchema = new mongoose.Schema({
    addressFrom: String,
    cityFrom: String,
    zipCode: String,
    countryFrom: String,
},
    {
        id: true, toJSON: {
            virtuals: true,
            versionKey: true
        },
        timestamps: true
    }
)

export default InvoiceSchema
// module.exports = InvoceSchema