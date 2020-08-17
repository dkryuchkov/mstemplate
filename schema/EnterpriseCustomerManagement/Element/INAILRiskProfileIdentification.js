var Modeler = require("../Modeler.js");
var className = 'ElementINAILRiskProfileIdentification';

var ElementINAILRiskProfileIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  INAILRiskProfileIdentification: {
      type: "TypeINAILRiskProfileIdentificationType",
      wsdlDefinition: {
        name: "INAILRiskProfileIdentification",
        type: "INAILRiskProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an INAIL Risk Profile object."
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
	  INAILRiskProfileIdentification: {
      type: "TypeINAILRiskProfileIdentificationType",
      wsdlDefinition: {
        name: "INAILRiskProfileIdentification",
        type: "INAILRiskProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an INAIL Risk Profile object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementINAILRiskProfileIdentification;
Modeler.register(ElementINAILRiskProfileIdentification, "ElementINAILRiskProfileIdentification");
