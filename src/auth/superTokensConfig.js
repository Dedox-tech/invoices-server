/* eslint-disable no-console */
const EmailPassword = require("supertokens-node/recipe/emailpassword");
const Session = require("supertokens-node/recipe/session");
const { superTokensKeys } = require("./superTokensKeys");
const { generalInfo } = require("./generalInfo");
const { aditionalFormFields } = require("./aditionalFormFields");
const { localFields } = require("../utils/localFields");
const mapIdToField = require("../utils/mapIdToField");
const filterPasswordField = require("../utils/filterPasswordField");
const { saveUser } = require("../users/services/index");

const superTokensConfig = {
    framework: "express",
    supertokens: superTokensKeys,
    appInfo: generalInfo,
    recipeList: [
        EmailPassword.init({
            signUpFeature: {
                formFields: aditionalFormFields,
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
                            const filteredFormField =
                                filterPasswordField(formFields);
                            const query = {};
                            localFields.forEach((element) => {
                                query[element] = mapIdToField(
                                    element,
                                    filteredFormField
                                );
                            });
                            await saveUser(query);
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
