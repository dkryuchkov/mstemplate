var Modeler = require("../Modeler.js");
var className = 'TypeCustomBudgetReferenceType';

var TypeCustomBudgetReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBudgetReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBudgetReferenceType",
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
	  CustomBudgetReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBudgetReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBudgetReferenceType;
Modeler.register(TypeCustomBudgetReferenceType, "TypeCustomBudgetReferenceType");
