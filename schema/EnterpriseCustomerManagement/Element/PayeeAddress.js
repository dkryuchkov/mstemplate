var Modeler = require("../Modeler.js");
var className = 'ElementPayeeAddress';

var ElementPayeeAddress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayeeAddress: {
      type: "TypeAddressType",
      wsdlDefinition: {
        name: "PayeeAddress",
        type: "AddressType",
        "xsd:annotation": {
          "xsd:documentation": "The address associated with a Payee in a payment transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  PayeeAddress: {
      type: "TypeAddressType",
      wsdlDefinition: {
        name: "PayeeAddress",
        type: "AddressType",
        "xsd:annotation": {
          "xsd:documentation": "The address associated with a Payee in a payment transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayeeAddress;
Modeler.register(ElementPayeeAddress, "ElementPayeeAddress");
