/* eslint-disable no-console */
import EmailPassword from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";
import superTokensKeys from "./superTokensKeys";
import generalInfo from "./generalInfo";

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

export default superTokensConfig;
