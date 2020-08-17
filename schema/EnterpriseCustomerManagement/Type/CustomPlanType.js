var Modeler = require("../Modeler.js");
var className = 'TypeCustomPlanType';

var TypeCustomPlanType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPlanType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPlanType",
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
	  CustomPlanType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPlanType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPlanType;
Modeler.register(TypeCustomPlanType, "TypeCustomPlanType");
