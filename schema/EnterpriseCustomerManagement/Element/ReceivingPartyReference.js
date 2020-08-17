var Modeler = require("../Modeler.js");
var className = 'ElementReceivingPartyReference';

var ElementReceivingPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceivingPartyReference: {
      type: "TypeReceivingPartyReferenceType",
      wsdlDefinition: {
        name: "ReceivingPartyReference",
        type: "ReceivingPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party responsible for accepting receipt of goods or services from suppliers"
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
	  ReceivingPartyReference: {
      type: "TypeReceivingPartyReferenceType",
      wsdlDefinition: {
        name: "ReceivingPartyReference",
        type: "ReceivingPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party responsible for accepting receipt of goods or services from suppliers"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReceivingPartyReference;
Modeler.register(ElementReceivingPartyReference, "ElementReceivingPartyReference");
