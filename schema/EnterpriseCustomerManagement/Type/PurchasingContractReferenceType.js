var Modeler = require("../Modeler.js");
var className = 'TypePurchasingContractReferenceType';

var TypePurchasingContractReferenceType = function(json, parentObj) {
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
      type: "TypeCustomPurchasingContractReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPurchasingContractReferenceType",
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
      type: "TypeCustomPurchasingContractReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPurchasingContractReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePurchasingContractReferenceType;
Modeler.register(TypePurchasingContractReferenceType, "TypePurchasingContractReferenceType");
