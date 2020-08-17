var Modeler = require("../Modeler.js");
var className = 'TypeCustomB2BMHeaderType';

var TypeCustomB2BMHeaderType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomB2BMHeaderType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomB2BMHeaderType",
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
	  CustomB2BMHeaderType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomB2BMHeaderType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomB2BMHeaderType;
Modeler.register(TypeCustomB2BMHeaderType, "TypeCustomB2BMHeaderType");
