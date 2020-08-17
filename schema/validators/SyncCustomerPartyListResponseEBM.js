const JSONPath = require('JSONPath');
const CanonicalSoapValidator = require('./CanonicalSoapValidator');
const rootDataAreaElNames = ["DataArea[0]", "SyncCustomerPartyListResponse", "Identification","BusinessComponentID","IdentifierType"];

module.exports = class Validator extends CanonicalSoapValidator {
    constructor(message, root) {
        super(message, root);
    }

    async validate() {
        const headererr = super.validate();
        const result = (await rootDataAreaElNames.map(rootDataAreaElName => {
            const rootDataAreaEl = JSONPath({
                json: this.message,
                path: `$..${rootDataAreaElName}`
            });

            if (headererr || !rootDataAreaEl || rootDataAreaEl.length === 0)
                return headererr || `Invalid ${this.root} ${rootDataAreaEl ? "has " + rootDataAreaEl.length + " " + rootDataAreaElName +" elements" :
                "missing ${rootDataAreaElName}"}`;
        })).filter(i => i);
        return result && result.length ? result : null;
    }

    result() {
        const rootDataAreaEl = JSONPath({
            json: this.message,
            path: `$..${rootDataAreaElNames.join("..")}`
        });
        return {
            id: rootDataAreaEl && rootDataAreaEl.length ? rootDataAreaEl[0] : null
        }
    }

}