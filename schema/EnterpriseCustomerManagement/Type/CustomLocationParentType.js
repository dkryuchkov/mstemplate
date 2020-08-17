var Modeler = require("../Modeler.js");
var className = 'TypeCustomLocationParentType';

var TypeCustomLocationParentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomLocationParentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLocationParentType",
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
	  CustomLocationParentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLocationParentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomLocationParentType;
Modeler.register(TypeCustomLocationParentType, "TypeCustomLocationParentType");
