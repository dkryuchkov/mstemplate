var Modeler = require("../Modeler.js");
var className = 'TypeCustomSpecificationType';

var TypeCustomSpecificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSpecificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationType",
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
	  CustomSpecificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSpecificationType;
Modeler.register(TypeCustomSpecificationType, "TypeCustomSpecificationType");
