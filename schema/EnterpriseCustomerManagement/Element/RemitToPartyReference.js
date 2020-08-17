var Modeler = require("../Modeler.js");
var className = 'ElementRemitToPartyReference';

var ElementRemitToPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RemitToPartyReference: {
      type: "TypeRemitToPartyReferenceType",
      wsdlDefinition: {
        name: "RemitToPartyReference",
        type: "RemitToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party to whom a transfer of funds or remittance is made"
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
	  RemitToPartyReference: {
      type: "TypeRemitToPartyReferenceType",
      wsdlDefinition: {
        name: "RemitToPartyReference",
        type: "RemitToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party to whom a transfer of funds or remittance is made"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRemitToPartyReference;
Modeler.register(ElementRemitToPartyReference, "ElementRemitToPartyReference");
