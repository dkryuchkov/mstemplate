var Modeler = require("../Modeler.js");
var className = 'TypeINAILRiskProfileReferenceType';

var TypeINAILRiskProfileReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  INAILRiskProfileIdentification: {
      type: "TypeINAILRiskProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:INAILRiskProfileIdentification",
        type: "INAILRiskProfileIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomINAILRiskProfileReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomINAILRiskProfileReferenceType",
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
	  INAILRiskProfileIdentification: {
      type: "TypeINAILRiskProfileIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:INAILRiskProfileIdentification",
        type: "INAILRiskProfileIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomINAILRiskProfileReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomINAILRiskProfileReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeINAILRiskProfileReferenceType;
Modeler.register(TypeINAILRiskProfileReferenceType, "TypeINAILRiskProfileReferenceType");
