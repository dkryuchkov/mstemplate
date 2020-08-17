var Modeler = require("../Modeler.js");
var className = 'ElementGLElement';

var ElementGLElement = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  GLElement: {
      type: "TypeGLElementType",
      wsdlDefinition: {
        name: "GLElement",
        type: "GLElementType",
        "xsd:annotation": {
          "xsd:documentation": "A sequenced set of account codes that form a Chart Of Accounts Code"
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
	  GLElement: {
      type: "TypeGLElementType",
      wsdlDefinition: {
        name: "GLElement",
        type: "GLElementType",
        "xsd:annotation": {
          "xsd:documentation": "A sequenced set of account codes that form a Chart Of Accounts Code"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGLElement;
Modeler.register(ElementGLElement, "ElementGLElement");
