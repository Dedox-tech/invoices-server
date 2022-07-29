/* eslint-disable no-undef */
const mockingoose = require("mockingoose");
const InvoiceSchema = require("../db/models/InvoiceSchema");

const { getInvoices } = import("./index")

describe("Models functionality test", () => {

    test('should get all invoices', async () => {
        const InvoiceModel = mongoose.model("invoice", InvoiceSchema)

        mockingoose(InvoiceModel).toReturn([
            {
                addressFrom: "Av. Hermanos Serdán, Puebla, Pue.",
                cityFrom: "Puebla",
                zipCode: "90010",
                countryFrom: "México",
                customerName: "Hector",
                customerEmail: "hectorBusiness@qgmail.com",
                customerAddress: "20 de Nov. 47, Centro, 90000 Tlaxcala de Xicohténcatl, Tlax.",
                customerCity: "Tlaxcala",
                customerZipCode: "90000",
                customerCountry: "México",
                invoiceDate: "28/07/2022",
                payTerms: "",
                description: ""
            },
            {
                addressFrom: "Av. Hermanos Serdán, Puebla, Pue.",
                cityFrom: "Puebla",
                zipCode: "90010",
                countryFrom: "México",
                customerName: "Hector",
                customerEmail: "hectorBusiness@qgmail.com",
                customerAddress: "20 de Nov. 47, Centro, 90000 Tlaxcala de Xicohténcatl, Tlax.",
                customerCity: "Tlaxcala",
                customerZipCode: "90000",
                customerCountry: "México",
                invoiceDate: "28/07/2022",
                payTerms: "",
                description: ""
            }
        ], "find")

        const allInvoices = await getInvoices()

        expect(allInvoices.invoices).toBe(Array)
    })
})