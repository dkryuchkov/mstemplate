var Modeler = require("../Modeler.js");
var className = 'ElementServiceContractReference';

var ElementServiceContractReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceContractReference: {
      type: "TypeContractReferenceType",
      wsdlDefinition: {
        name: "ServiceContractReference",
        type: "ContractReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the service contract."
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
	  ServiceContractReference: {
      type: "TypeContractReferenceType",
      wsdlDefinition: {
        name: "ServiceContractReference",
        type: "ContractReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the service contract."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceContractReference;
Modeler.register(ElementServiceContractReference, "ElementServiceContractReference");
