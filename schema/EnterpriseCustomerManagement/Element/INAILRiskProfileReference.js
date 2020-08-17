var Modeler = require("../Modeler.js");
var className = 'ElementINAILRiskProfileReference';

var ElementINAILRiskProfileReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  INAILRiskProfileReference: {
      type: "TypeINAILRiskProfileReferenceType",
      wsdlDefinition: {
        name: "INAILRiskProfileReference",
        type: "INAILRiskProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Government Agency object. INAIL, an Italian institute, classifies jobs according to the level of risk that is associated with the job and the related insurance that is required by the employer. This object allows for the a risk profile to be set up according to INAIL scheme. The object then can be associated with a Job. The insurance requirement can then be determined for the job."
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
	  INAILRiskProfileReference: {
      type: "TypeINAILRiskProfileReferenceType",
      wsdlDefinition: {
        name: "INAILRiskProfileReference",
        type: "INAILRiskProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Government Agency object. INAIL, an Italian institute, classifies jobs according to the level of risk that is associated with the job and the related insurance that is required by the employer. This object allows for the a risk profile to be set up according to INAIL scheme. The object then can be associated with a Job. The insurance requirement can then be determined for the job."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementINAILRiskProfileReference;
Modeler.register(ElementINAILRiskProfileReference, "ElementINAILRiskProfileReference");
