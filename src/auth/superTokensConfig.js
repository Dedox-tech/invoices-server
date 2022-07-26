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
                            /* 
                                Ejemplo
                                console.log(formFields);
                                Expected:
                                [
                                    {
                                       "id": "email", "value": "hola@example.com" 
                                    },
                                    {
                                        "id": "nombre", "value": "Juan"
                                    },
                                    {
                                        "id": "apellidos", "value": "Perez"
                                    }
                                ]
                            */
                            /*
                                Como guardar esta info en la base de datos? :/
                                Hay que crear un nuevo servicio o una nueva colección?
                                Aquí si me pierdo un poco
                            */
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
