var Modeler = require("../Modeler.js");
var className = 'TypeCustomDependentType';

var TypeCustomDependentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDependentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDependentType",
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
	  CustomDependentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDependentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDependentType;
Modeler.register(TypeCustomDependentType, "TypeCustomDependentType");
