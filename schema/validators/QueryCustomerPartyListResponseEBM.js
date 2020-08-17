const JSONPath = require('JSONPath');
const CanonicalSoapValidator = require('./CanonicalSoapValidator');
const rootDataAreaElNames = ["DataArea[0]"];
const pathToData = ["DataArea[0]", "QueryCustomerPartyListResponse", "PartyContact[0]", "Contact", "Custom", "Driver", "ListOfCandidate", "Candidate[0]"];
const searchResponseTransfrom = require('../transformations/searchResponseTransfrom');
const resultMap = {
    cgid: "Identification[0].BusinessComponentID[0]._",
    type: "Identification[0].ContextID[0]._",
    firstname: "Person[0]..FirstName[0]._",
    lastname: "Person[0]..FamilyName[0]._"
};

module.exports = class Validator extends CanonicalSoapValidator {
    constructor(message, root) {
        super(message, root);
    }

    async validate(message = rootDataAreaElNames) {
        const headererr = super.validate();
        const result = (await message.map(rootDataAreaElName => {
            const rootDataAreaEl = JSONPath({
                json: this.message,
                path: `$..${rootDataAreaElName}`
            });

            if (headererr || !rootDataAreaEl || ! rootDataAreaEl.length)
                return headererr || `Invalid ${this.root} ${rootDataAreaEl ? "has " + rootDataAreaEl.length + " " + rootDataAreaElName +" elements" :
                "missing ${rootDataAreaElName}"}`;
        })).filter(i=>i);
        return result && result.length ? result : null
    }

    async result() {
        const err = await this.validate(pathToData);
        if (err) return { result: [] };
        return searchResponseTransfrom(this.message.DataArea[0]
            .QueryCustomerPartyListResponse.PartyContact[0].Contact
            .Custom.Driver.ListOfCandidate.Candidate[0]);

    }
}
