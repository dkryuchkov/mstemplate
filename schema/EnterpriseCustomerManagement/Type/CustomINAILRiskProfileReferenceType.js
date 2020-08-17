var Modeler = require("../Modeler.js");
var className = 'TypeCustomINAILRiskProfileReferenceType';

var TypeCustomINAILRiskProfileReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomINAILRiskProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomINAILRiskProfileReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomINAILRiskProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomINAILRiskProfileReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomINAILRiskProfileReferenceType;
Modeler.register(TypeCustomINAILRiskProfileReferenceType, "TypeCustomINAILRiskProfileReferenceType");
