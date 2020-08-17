var Modeler = require("../Modeler.js");
var className = 'ElementCustomerServiceRepresentativePersonPartyReference';

var ElementCustomerServiceRepresentativePersonPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerServiceRepresentativePersonPartyReference: {
      type: "TypeCustomerServiceRepresentativePersonPartyReferenceType",
      wsdlDefinition: {
        name: "CustomerServiceRepresentativePersonPartyReference",
        type: "CustomerServiceRepresentativePersonPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "One who is fulfilling the request. Identifies the agent accountable for the resolution of the issue \ndescribed in the service request."
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
	  CustomerServiceRepresentativePersonPartyReference: {
      type: "TypeCustomerServiceRepresentativePersonPartyReferenceType",
      wsdlDefinition: {
        name: "CustomerServiceRepresentativePersonPartyReference",
        type: "CustomerServiceRepresentativePersonPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "One who is fulfilling the request. Identifies the agent accountable for the resolution of the issue \ndescribed in the service request."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerServiceRepresentativePersonPartyReference;
Modeler.register(ElementCustomerServiceRepresentativePersonPartyReference, "ElementCustomerServiceRepresentativePersonPartyReference");
