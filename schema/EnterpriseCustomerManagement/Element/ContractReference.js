var Modeler = require("../Modeler.js");
var className = 'ElementContractReference';

var ElementContractReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContractReference: {
      type: "TypeContractReferenceType",
      wsdlDefinition: {
        name: "ContractReference",
        type: "ContractReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A binding agreement between two or more parties for performing, or refraining from performing, some specified act(s) in exchange for lawful consideration"
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
	  ContractReference: {
      type: "TypeContractReferenceType",
      wsdlDefinition: {
        name: "ContractReference",
        type: "ContractReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A binding agreement between two or more parties for performing, or refraining from performing, some specified act(s) in exchange for lawful consideration"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContractReference;
Modeler.register(ElementContractReference, "ElementContractReference");
