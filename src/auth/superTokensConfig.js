/* eslint-disable no-console */
const EmailPassword = require("supertokens-node/recipe/emailpassword");
const Session = require("supertokens-node/recipe/session");

const { superTokensKeys } = require("./superTokensKeys");
const { generalInfo } = require("./generalInfo");

const superTokensConfig = {
    framework: "express",
    supertokens: superTokensKeys,
    appInfo: generalInfo,
    recipeList: [
        EmailPassword.init({
            signUpFeature: {
                formFields: [
                    {
                        id: "nombre",
                    },
                    {
                        id: "apellidos",
                    },
                ],
            },
            override: {
                apis: (originalImplementation) => ({
                    ...originalImplementation,
                    async signUpPOST(input) {
                        if (originalImplementation.signUpPOST === undefined) {
                            throw Error(
                                "Ha ocurrido un error. Intentelo más tarde"
                            );
                        }
                        const response =
                            await originalImplementation.signUpPOST(input);
                        if (response.status === "OK") {
                            const { formFields } = input;
                            console.log(formFields);
                        }
                        return response;
                    },
                }),
            },
        }),
        Session.init(),
    ],
};

module.exports = { superTokensConfig };
