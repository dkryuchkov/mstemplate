var Modeler = require("../Modeler.js");
var className = 'ElementLegalEntityGLElementValueSetReference';

var ElementLegalEntityGLElementValueSetReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LegalEntityGLElementValueSetReference: {
      type: "TypeGLElementValueSetReferenceType",
      wsdlDefinition: {
        name: "LegalEntityGLElementValueSetReference",
        type: "GLElementValueSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a Value Set for a Legal Entity (Company) segment"
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
	  LegalEntityGLElementValueSetReference: {
      type: "TypeGLElementValueSetReferenceType",
      wsdlDefinition: {
        name: "LegalEntityGLElementValueSetReference",
        type: "GLElementValueSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A reference to a Value Set for a Legal Entity (Company) segment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLegalEntityGLElementValueSetReference;
Modeler.register(ElementLegalEntityGLElementValueSetReference, "ElementLegalEntityGLElementValueSetReference");
