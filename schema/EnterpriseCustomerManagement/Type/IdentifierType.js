var Modeler = require("../Modeler.js");
var className = 'TypeIdentifierType';

var TypeIdentifierType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  IdentifierType: {
      type: "string",
      wsdlDefinition: {
        name: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "A character string to identify and distinguish uniquely, one instance of an object in an identification scheme from all other objects in the same scheme together with relevant supplementary information"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:normalizedString",
            "xsd:attribute": [
              {
                name: "schemeID",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "schemeAgencyID",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "schemeVersionID",
                type: "xsd:normalizedString",
                use: "optional",
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
    schemeID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "schemeID",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    schemeAgencyID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "schemeAgencyID",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    schemeVersionID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "schemeVersionID",
        type: "xsd:normalizedString",
        use: "optional",
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
	  IdentifierType: {
      type: "string",
      wsdlDefinition: {
        name: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "A character string to identify and distinguish uniquely, one instance of an object in an identification scheme from all other objects in the same scheme together with relevant supplementary information"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:normalizedString",
            "xsd:attribute": [
              {
                name: "schemeID",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "schemeAgencyID",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "schemeVersionID",
                type: "xsd:normalizedString",
                use: "optional",
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
    schemeID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "schemeID",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    schemeAgencyID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "schemeAgencyID",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    schemeVersionID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "schemeVersionID",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeIdentifierType;
Modeler.register(TypeIdentifierType, "TypeIdentifierType");
