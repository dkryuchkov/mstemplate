var Modeler = require("../Modeler.js");
var className = 'TypeCustomTargetType';

var TypeCustomTargetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTargetType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTargetType",
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
	  CustomTargetType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTargetType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTargetType;
Modeler.register(TypeCustomTargetType, "TypeCustomTargetType");
