const JSONPath = require('JSONPath');

module.exports = class CanonicalSoapValidator extends Object {
    constructor(message,root) {
		super(message);
        this.message = message;
        this.root = root;
    }
    
    validate()
    {
        return null;
    }

    result()
    {
        return {
            exception: null
        }
    }
}