var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemATPRuleReferenceType';

var TypeCustomItemATPRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemATPRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemATPRuleReferenceType",
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
	  CustomItemATPRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemATPRuleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemATPRuleReferenceType;
Modeler.register(TypeCustomItemATPRuleReferenceType, "TypeCustomItemATPRuleReferenceType");
