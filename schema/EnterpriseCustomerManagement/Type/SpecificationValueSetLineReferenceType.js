var Modeler = require("../Modeler.js");
var className = 'TypeSpecificationValueSetLineReferenceType';

var TypeSpecificationValueSetLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecificationValueSetIdentification: {
      type: "TypeSpecificationValueSetIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SpecificationValueSetIdentification",
        type: "SpecificationValueSetIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SpecificationValueSetLineIdentification: {
      type: "TypeSpecificationValueSetLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SpecificationValueSetLineIdentification",
        type: "SpecificationValueSetLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Value: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Value",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The value the Specification Value Set Line being referenced has."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomSpecificationValueSetLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSpecificationValueSetLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  SpecificationValueSetIdentification: {
      type: "TypeSpecificationValueSetIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SpecificationValueSetIdentification",
        type: "SpecificationValueSetIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SpecificationValueSetLineIdentification: {
      type: "TypeSpecificationValueSetLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SpecificationValueSetLineIdentification",
        type: "SpecificationValueSetLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Value: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Value",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "The value the Specification Value Set Line being referenced has."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomSpecificationValueSetLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSpecificationValueSetLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSpecificationValueSetLineReferenceType;
Modeler.register(TypeSpecificationValueSetLineReferenceType, "TypeSpecificationValueSetLineReferenceType");
