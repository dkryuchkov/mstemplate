var Modeler = require("../Modeler.js");
var className = 'ElementBuyerPartyReference';

var ElementBuyerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BuyerPartyReference: {
      type: "TypeBuyerPartyReferenceType",
      wsdlDefinition: {
        name: "BuyerPartyReference",
        type: "BuyerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A person, department or organization responsible for buying goods and services"
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
	  BuyerPartyReference: {
      type: "TypeBuyerPartyReferenceType",
      wsdlDefinition: {
        name: "BuyerPartyReference",
        type: "BuyerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A person, department or organization responsible for buying goods and services"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBuyerPartyReference;
Modeler.register(ElementBuyerPartyReference, "ElementBuyerPartyReference");
