const EmailPassword = require("supertokens-node/recipe/emailpassword");
const userModels = require("../db/models/index");

const saveUser = async (data) => {
    const newUser = await userModels.save(data);
    if (!newUser) {
        throw new Error("There is a problem with the server");
    }
    return newUser;
};

const getUserData = async (req, res) => {
    const userId = req.session.getUserId();
    const userIncompleteInfo = await EmailPassword.getUserById(userId);
    const userEmail = userIncompleteInfo.email;
    if (!userEmail) {
        return res.status(404).send({
            code: "not found",
            message:
                "Not found user email in the auth database. Also, probabibly there is a problem with the request",
        });
    }

    const userCompleteInfo = await userModels.getUser({ email: userEmail });
    if (!userCompleteInfo) {
        return res.status(500).send({
            code: "bad request",
            message: "There is a problem with the server",
        });
    }

    if (userCompleteInfo.length === 0) {
        return res.status(404).send({
            code: "not-found",
            message: "Not found user in the database",
        });
    }

    return res.status(200).send({ userCompleteInfo });
};

module.exports = {
    saveUser,
    getUserData,
};
