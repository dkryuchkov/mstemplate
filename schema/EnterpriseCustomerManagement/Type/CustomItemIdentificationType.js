var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemIdentificationType';

var TypeCustomItemIdentificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemIdentificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemIdentificationType",
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
	  CustomItemIdentificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemIdentificationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemIdentificationType;
Modeler.register(TypeCustomItemIdentificationType, "TypeCustomItemIdentificationType");
