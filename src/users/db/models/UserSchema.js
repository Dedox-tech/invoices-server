const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        apellidos: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
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

module.exports = UserSchema;
