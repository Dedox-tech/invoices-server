/* eslint-disable no-return-await */
/* eslint-disable no-undef */
const db = require("./db.connect");
const invoiceModels = require("../invoices/db/models/index");

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.clearDatabase());

describe("Models functionality test", () => {
    test("should create invoice", async () => {
        const invoice = {
            addressFrom: "Av. Hermanos Serdán, Puebla, Pue.",
            cityFrom: "Puebla",
            zipCodeFrom: "90010",
            countryFrom: "México",
            customerName: "Hector",
            customerEmail: "hectorBusiness@qgmail.com",
            customerAddress:
                "20 de Nov. 47, Centro, 90000 Tlaxcala de Xicohténcatl, Tlax.",
            customerCity: "Tlaxcala",
            customerZipCode: "90000",
            customerCountry: "México",
            invoiceDate: "28/07/2022",
            payTerms: "",
            description: "",
        };

        const invoiceCreated = await invoiceModels.create(invoice);
        const invoiceFinded = await invoiceModels.getOne(invoiceCreated.id);

        expect(invoiceFinded.customerName).toEqual("Hector");
        expect(invoiceFinded.cityFrom).toEqual("Puebla");
    });

    test("should get all invoices", async () => {
        const invoice = {
            addressFrom: "Av. Hermanos Serdán, Puebla, Pue.",
            cityFrom: "Puebla",
            zipCodeFrom: "90010",
            countryFrom: "México",
            customerName: "Hector",
            customerEmail: "hectorBusiness@qgmail.com",
            customerAddress:
                "20 de Nov. 47, Centro, 90000 Tlaxcala de Xicohténcatl, Tlax.",
            customerCity: "Tlaxcala",
            customerZipCode: "90000",
            customerCountry: "México",
            invoiceDate: "28/07/2022",
            payTerms: "",
            description: "",
        };

        await invoiceModels.create(invoice);
        const invoiceFinded = await invoiceModels.getAll({});

        expect(invoiceFinded.length).toBeGreaterThan(0);
    });

    test("should get one invoice", async () => {
        const invoice = {
            addressFrom: "Av. Hermanos Serdán, Puebla, Pue.",
            cityFrom: "Puebla",
            zipCodeFrom: "90010",
            countryFrom: "México",
            customerName: "Hector",
            customerEmail: "hectorBusiness@qgmail.com",
            customerAddress:
                "20 de Nov. 47, Centro, 90000 Tlaxcala de Xicohténcatl, Tlax.",
            customerCity: "Tlaxcala",
            customerZipCode: "90000",
            customerCountry: "México",
            invoiceDate: "28/07/2022",
            payTerms: "",
            description: "",
        };

        const invoiceCreated = await invoiceModels.create(invoice);

        const invoiceFinded = await invoiceModels.getOne(invoiceCreated.id);

        expect(invoiceFinded.id).toBe(invoiceCreated.id);
    });

    test("should update a invoice", async () => {
        const invoice = {
            addressFrom: "Av. Hermanos Serdán, Puebla, Pue.",
            cityFrom: "Puebla",
            zipCodeFrom: "90010",
            countryFrom: "México",
            customerName: "Hector",
            customerEmail: "hectorBusiness@qgmail.com",
            customerAddress:
                "20 de Nov. 47, Centro, 90000 Tlaxcala de Xicohténcatl, Tlax.",
            customerCity: "Tlaxcala",
            customerZipCode: "90000",
            customerCountry: "México",
            invoiceDate: "28/07/2022",
            payTerms: "",
            description: "",
        };

        const invoiceCreated = await invoiceModels.create(invoice);
        await invoiceModels.update(invoiceCreated.id, {
            customerName: "Ramiro",
        });
        const invoiceFinded = await invoiceModels.getOne(invoiceCreated.id);

        expect(invoiceFinded.customerName).toBe("Ramiro");
    });

    test("should delete a invoice", async () => {
        const invoice = {
            addressFrom: "Av. Hermanos Serdán, Puebla, Pue.",
            cityFrom: "Puebla",
            zipCodeFrom: "90010",
            countryFrom: "México",
            customerName: "Hector",
            customerEmail: "hectorBusiness@qgmail.com",
            customerAddress:
                "20 de Nov. 47, Centro, 90000 Tlaxcala de Xicohténcatl, Tlax.",
            customerCity: "Tlaxcala",
            customerZipCode: "90000",
            customerCountry: "México",
            invoiceDate: "28/07/2022",
            payTerms: "",
            description: "",
        };

        const invoiceCreated = await invoiceModels.create(invoice);
        await invoiceModels.remove(invoiceCreated.id);
        const invoiceFinded = await invoiceModels.getOne(invoiceCreated.id);

        expect(invoiceFinded).toBe(null);
    });
});
