var Modeler = require("../Modeler.js");
var className = 'ElementCustomerAgentPartyReference';

var ElementCustomerAgentPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerAgentPartyReference: {
      type: "TypeCustomerAgentPartyReferenceType",
      wsdlDefinition: {
        name: "CustomerAgentPartyReference",
        type: "CustomerAgentPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An Agent who files the service request on behalf of their Customer."
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
	  CustomerAgentPartyReference: {
      type: "TypeCustomerAgentPartyReferenceType",
      wsdlDefinition: {
        name: "CustomerAgentPartyReference",
        type: "CustomerAgentPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An Agent who files the service request on behalf of their Customer."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerAgentPartyReference;
Modeler.register(ElementCustomerAgentPartyReference, "ElementCustomerAgentPartyReference");
