var Modeler = require("../Modeler.js");
var className = 'TypeCustomIncentiveCompensationPlanComponentReferenceType';

var TypeCustomIncentiveCompensationPlanComponentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomIncentiveCompensationPlanComponentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomIncentiveCompensationPlanComponentReferenceType",
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
	  CustomIncentiveCompensationPlanComponentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomIncentiveCompensationPlanComponentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomIncentiveCompensationPlanComponentReferenceType;
Modeler.register(TypeCustomIncentiveCompensationPlanComponentReferenceType, "TypeCustomIncentiveCompensationPlanComponentReferenceType");
