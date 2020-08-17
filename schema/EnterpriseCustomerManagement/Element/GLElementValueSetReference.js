var Modeler = require("../Modeler.js");
var className = 'ElementGLElementValueSetReference';

var ElementGLElementValueSetReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  GLElementValueSetReference: {
      type: "TypeGLElementValueSetReferenceType",
      wsdlDefinition: {
        name: "GLElementValueSetReference",
        type: "GLElementValueSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a Value Set assigned to each GL Element of an Chart of Accounts."
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
	  GLElementValueSetReference: {
      type: "TypeGLElementValueSetReferenceType",
      wsdlDefinition: {
        name: "GLElementValueSetReference",
        type: "GLElementValueSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a Value Set assigned to each GL Element of an Chart of Accounts."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGLElementValueSetReference;
Modeler.register(ElementGLElementValueSetReference, "ElementGLElementValueSetReference");
