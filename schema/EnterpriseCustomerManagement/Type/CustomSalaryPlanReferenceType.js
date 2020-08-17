var Modeler = require("../Modeler.js");
var className = 'TypeCustomSalaryPlanReferenceType';

var TypeCustomSalaryPlanReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSalaryPlanReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalaryPlanReferenceType",
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
	  CustomSalaryPlanReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalaryPlanReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSalaryPlanReferenceType;
Modeler.register(TypeCustomSalaryPlanReferenceType, "TypeCustomSalaryPlanReferenceType");
