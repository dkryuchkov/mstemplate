var Modeler = require("../Modeler.js");
var className = 'ElementContractIdentification';

var ElementContractIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContractIdentification: {
      type: "TypeContractIdentificationType",
      wsdlDefinition: {
        name: "ContractIdentification",
        type: "ContractIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Contract"
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
	  ContractIdentification: {
      type: "TypeContractIdentificationType",
      wsdlDefinition: {
        name: "ContractIdentification",
        type: "ContractIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Contract"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContractIdentification;
Modeler.register(ElementContractIdentification, "ElementContractIdentification");
