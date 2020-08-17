var Modeler = require("../Modeler.js");
var className = 'ElementContractLineIdentification';

var ElementContractLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContractLineIdentification: {
      type: "TypeContractLineIdentificationType",
      wsdlDefinition: {
        name: "ContractLineIdentification",
        type: "ContractLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Contract Line"
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
	  ContractLineIdentification: {
      type: "TypeContractLineIdentificationType",
      wsdlDefinition: {
        name: "ContractLineIdentification",
        type: "ContractLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Contract Line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContractLineIdentification;
Modeler.register(ElementContractLineIdentification, "ElementContractLineIdentification");
