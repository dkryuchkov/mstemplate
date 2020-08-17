var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemPickingRuleReferenceType';

var TypeCustomItemPickingRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemPickingRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemPickingRuleReferenceType",
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
	  CustomItemPickingRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemPickingRuleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemPickingRuleReferenceType;
Modeler.register(TypeCustomItemPickingRuleReferenceType, "TypeCustomItemPickingRuleReferenceType");
