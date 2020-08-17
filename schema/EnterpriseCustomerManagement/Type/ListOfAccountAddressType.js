var Modeler = require("../Modeler.js");
var className = 'TypeListOfAccountAddressType';

var TypeListOfAccountAddressType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountAddress: {
      type: "TypeAccountAddressType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:AccountAddress",
        type: "AccountAddressType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  AccountAddress: {
      type: "TypeAccountAddressType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecomcust:AccountAddress",
        type: "AccountAddressType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfAccountAddressType;
Modeler.register(TypeListOfAccountAddressType, "TypeListOfAccountAddressType");
