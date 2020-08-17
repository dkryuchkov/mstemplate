var Modeler = require("../Modeler.js");
var className = 'TypeContractReferenceType';

var TypeContractReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContractIdentification: {
      type: "TypeContractIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ContractIdentification",
        type: "ContractIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomContractReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomContractReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:ContractIdentification",
        type: "ContractIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomContractReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomContractReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeContractReferenceType;
Modeler.register(TypeContractReferenceType, "TypeContractReferenceType");
