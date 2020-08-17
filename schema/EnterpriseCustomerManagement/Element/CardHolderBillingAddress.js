var Modeler = require("../Modeler.js");
var className = 'ElementCardHolderBillingAddress';

var ElementCardHolderBillingAddress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CardHolderBillingAddress: {
      type: "TypeAddressType",
      wsdlDefinition: {
        name: "CardHolderBillingAddress",
        type: "AddressType",
        "xsd:annotation": {
          "xsd:documentation": "Billing Address of a Credit oe Debit Card Holder"
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
	  CardHolderBillingAddress: {
      type: "TypeAddressType",
      wsdlDefinition: {
        name: "CardHolderBillingAddress",
        type: "AddressType",
        "xsd:annotation": {
          "xsd:documentation": "Billing Address of a Credit oe Debit Card Holder"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCardHolderBillingAddress;
Modeler.register(ElementCardHolderBillingAddress, "ElementCardHolderBillingAddress");
