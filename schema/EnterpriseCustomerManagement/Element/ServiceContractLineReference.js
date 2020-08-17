var Modeler = require("../Modeler.js");
var className = 'ElementServiceContractLineReference';

var ElementServiceContractLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceContractLineReference: {
      type: "TypeServiceContractLineReferenceType",
      wsdlDefinition: {
        name: "ServiceContractLineReference",
        type: "ServiceContractLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a specific line within a Service contract for Service Request."
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
	  ServiceContractLineReference: {
      type: "TypeServiceContractLineReferenceType",
      wsdlDefinition: {
        name: "ServiceContractLineReference",
        type: "ServiceContractLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a specific line within a Service contract for Service Request."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceContractLineReference;
Modeler.register(ElementServiceContractLineReference, "ElementServiceContractLineReference");
