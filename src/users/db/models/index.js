const mongoose = require("mongoose");

const UserSchema = require("./UserSchema");

const save = async (user) => {
    const userModel = mongoose.model("users", UserSchema);
    const result = await userModel.create(user);
    return result;
};

const getUser = async (query) => {
    const userModel = mongoose.model("users", UserSchema);
    const result = await userModel.find(query);
    return result;
};

module.exports = {
    save,
    getUser,
};
