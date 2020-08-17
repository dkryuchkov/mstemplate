const JSONPath = require('JSONPath');

module.exports = class CanonicalSoapValidator extends Object {
    constructor(message,root) {
		super(message);
        this.message = message;
        this.root = root;
    }
    
    validate()
    {
        const header = JSONPath({json: this.message, path: `$..EBMHeader`});
        const err = header && header.length === 1 ? null :
         `Invalid ${this.root} ${header ? "has " + header.length + " EBMHeader elements" : "missing EBMHeader"}`;
        return err;
    }
}