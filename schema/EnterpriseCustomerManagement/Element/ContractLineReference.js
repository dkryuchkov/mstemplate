var Modeler = require("../Modeler.js");
var className = 'ElementContractLineReference';

var ElementContractLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContractLineReference: {
      type: "TypeContractLineReferenceType",
      wsdlDefinition: {
        name: "ContractLineReference",
        type: "ContractLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a specific line within a contract"
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
	  ContractLineReference: {
      type: "TypeContractLineReferenceType",
      wsdlDefinition: {
        name: "ContractLineReference",
        type: "ContractLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a specific line within a contract"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContractLineReference;
Modeler.register(ElementContractLineReference, "ElementContractLineReference");
