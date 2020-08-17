var Modeler = require("../Modeler.js");
var className = 'TypeCustomAccountingRuleReferenceType';

var TypeCustomAccountingRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomAccountingRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAccountingRuleReferenceType",
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
	  CustomAccountingRuleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomAccountingRuleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomAccountingRuleReferenceType;
Modeler.register(TypeCustomAccountingRuleReferenceType, "TypeCustomAccountingRuleReferenceType");
