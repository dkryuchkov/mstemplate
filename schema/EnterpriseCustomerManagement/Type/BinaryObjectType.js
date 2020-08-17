var Modeler = require("../Modeler.js");
var className = 'TypeBinaryObjectType';

var TypeBinaryObjectType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BinaryObjectType: {
      type: "string",
      wsdlDefinition: {
        name: "BinaryObjectType",
        "xsd:annotation": {
          "xsd:documentation": "A set of finite-length sequences of binary octets"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:base64Binary",
            "xsd:attribute": [
              {
                name: "mimeCode",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "characterSetCode",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "fileName",
                type: "xsd:normalizedString",
                attribute: true
              }
            ]
          }
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    mimeCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "mimeCode",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    characterSetCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "characterSetCode",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileName: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "fileName",
        type: "xsd:normalizedString",
        attribute: true
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
	  BinaryObjectType: {
      type: "string",
      wsdlDefinition: {
        name: "BinaryObjectType",
        "xsd:annotation": {
          "xsd:documentation": "A set of finite-length sequences of binary octets"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:base64Binary",
            "xsd:attribute": [
              {
                name: "mimeCode",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "characterSetCode",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "fileName",
                type: "xsd:normalizedString",
                attribute: true
              }
            ]
          }
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    mimeCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "mimeCode",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    characterSetCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "characterSetCode",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fileName: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "fileName",
        type: "xsd:normalizedString",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBinaryObjectType;
Modeler.register(TypeBinaryObjectType, "TypeBinaryObjectType");
