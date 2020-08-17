var Modeler = require("../Modeler.js");
var className = 'ElementCardHolderAddress';

var ElementCardHolderAddress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CardHolderAddress: {
      type: "TypeAddressType",
      wsdlDefinition: {
        name: "CardHolderAddress",
        type: "AddressType",
        "xsd:annotation": {
          "xsd:documentation": "Address of the holder of a credit or debit card"
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
	  CardHolderAddress: {
      type: "TypeAddressType",
      wsdlDefinition: {
        name: "CardHolderAddress",
        type: "AddressType",
        "xsd:annotation": {
          "xsd:documentation": "Address of the holder of a credit or debit card"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCardHolderAddress;
Modeler.register(ElementCardHolderAddress, "ElementCardHolderAddress");
