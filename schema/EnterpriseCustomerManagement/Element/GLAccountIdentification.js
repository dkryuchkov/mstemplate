var Modeler = require("../Modeler.js");
var className = 'ElementGLAccountIdentification';

var ElementGLAccountIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  GLAccountIdentification: {
      type: "TypeGLAccountIdentificationType",
      wsdlDefinition: {
        name: "GLAccountIdentification",
        type: "GLAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an account combination"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  GLAccountIdentification: {
      type: "TypeGLAccountIdentificationType",
      wsdlDefinition: {
        name: "GLAccountIdentification",
        type: "GLAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an account combination"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGLAccountIdentification;
Modeler.register(ElementGLAccountIdentification, "ElementGLAccountIdentification");
