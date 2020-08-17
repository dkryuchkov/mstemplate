var Modeler = require("../Modeler.js");
var className = 'ElementGLElementValueSetLine';

var ElementGLElementValueSetLine = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  GLElementValueSetLine: {
      type: "TypeGLElementValueSetLineType",
      wsdlDefinition: {
        name: "GLElementValueSetLine",
        type: "GLElementValueSetLineType",
        "xsd:annotation": {
          "xsd:documentation": "Holding a legal GL Element value in the GL Element value set"
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
	  GLElementValueSetLine: {
      type: "TypeGLElementValueSetLineType",
      wsdlDefinition: {
        name: "GLElementValueSetLine",
        type: "GLElementValueSetLineType",
        "xsd:annotation": {
          "xsd:documentation": "Holding a legal GL Element value in the GL Element value set"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGLElementValueSetLine;
Modeler.register(ElementGLElementValueSetLine, "ElementGLElementValueSetLine");
