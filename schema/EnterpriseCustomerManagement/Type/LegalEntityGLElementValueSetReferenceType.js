var Modeler = require("../Modeler.js");
var className = 'TypeLegalEntityGLElementValueSetReferenceType';

var TypeLegalEntityGLElementValueSetReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ValueSetIdentification: {
      type: "TypeValueSetIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ValueSetIdentification",
        type: "ValueSetIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomValueSetReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomValueSetReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "GLElementValueSetReferenceType",
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
	  ValueSetIdentification: {
      type: "TypeValueSetIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ValueSetIdentification",
        type: "ValueSetIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomValueSetReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomValueSetReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "GLElementValueSetReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLegalEntityGLElementValueSetReferenceType;
Modeler.register(TypeLegalEntityGLElementValueSetReferenceType, "TypeLegalEntityGLElementValueSetReferenceType");
