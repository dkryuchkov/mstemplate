var Modeler = require("../Modeler.js");
var className = 'TypeCustomGLAccountType';

var TypeCustomGLAccountType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomGLAccountType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomGLAccountType",
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
	  CustomGLAccountType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomGLAccountType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomGLAccountType;
Modeler.register(TypeCustomGLAccountType, "TypeCustomGLAccountType");
