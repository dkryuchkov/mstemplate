var Modeler = require("../Modeler.js");
var className = 'ElementPayFromPartyReference';

var ElementPayFromPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayFromPartyReference: {
      type: "TypePayFromPartyReferenceType",
      wsdlDefinition: {
        name: "PayFromPartyReference",
        type: "PayFromPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party responsible for the payment of a bill of exchange or invoice"
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
	  PayFromPartyReference: {
      type: "TypePayFromPartyReferenceType",
      wsdlDefinition: {
        name: "PayFromPartyReference",
        type: "PayFromPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party responsible for the payment of a bill of exchange or invoice"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayFromPartyReference;
Modeler.register(ElementPayFromPartyReference, "ElementPayFromPartyReference");
