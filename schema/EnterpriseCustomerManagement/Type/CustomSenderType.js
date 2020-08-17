var Modeler = require("../Modeler.js");
var className = 'TypeCustomSenderType';

var TypeCustomSenderType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSenderType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSenderType",
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
	  CustomSenderType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSenderType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSenderType;
Modeler.register(TypeCustomSenderType, "TypeCustomSenderType");
