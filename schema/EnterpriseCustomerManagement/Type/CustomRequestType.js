var Modeler = require("../Modeler.js");
var className = 'TypeCustomRequestType';

var TypeCustomRequestType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRequestType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequestType",
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
	  CustomRequestType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRequestType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRequestType;
Modeler.register(TypeCustomRequestType, "TypeCustomRequestType");
