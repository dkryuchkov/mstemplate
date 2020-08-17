var Modeler = require("../Modeler.js");
var className = 'ElementMediatorPartyReference';

var ElementMediatorPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MediatorPartyReference: {
      type: "TypePersonPartyReferenceType",
      wsdlDefinition: {
        name: "MediatorPartyReference",
        type: "PersonPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The broker/mediator customer acts as a broker for the sold to customer"
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
	  MediatorPartyReference: {
      type: "TypePersonPartyReferenceType",
      wsdlDefinition: {
        name: "MediatorPartyReference",
        type: "PersonPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The broker/mediator customer acts as a broker for the sold to customer"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMediatorPartyReference;
Modeler.register(ElementMediatorPartyReference, "ElementMediatorPartyReference");
