var Modeler = require("../Modeler.js");
var className = 'ElementSoldToPartyReference';

var ElementSoldToPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SoldToPartyReference: {
      type: "TypeSoldToPartyReferenceType",
      wsdlDefinition: {
        name: "SoldToPartyReference",
        type: "SoldToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization to whom the Goods or Services are sold."
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
	  SoldToPartyReference: {
      type: "TypeSoldToPartyReferenceType",
      wsdlDefinition: {
        name: "SoldToPartyReference",
        type: "SoldToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization to whom the Goods or Services are sold."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSoldToPartyReference;
Modeler.register(ElementSoldToPartyReference, "ElementSoldToPartyReference");
