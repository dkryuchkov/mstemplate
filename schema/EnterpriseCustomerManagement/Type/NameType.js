var Modeler = require("../Modeler.js");
var className = 'TypeNameType';

var TypeNameType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  NameType: {
      type: "string",
      wsdlDefinition: {
        name: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "A character string that consititues the distinctive designation of a person, place, thing or concept"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:string",
            "xsd:attribute": [
              {
                name: "languageCode",
                type: "xsd:normalizedString",
                attribute: true
              },
              {
                name: "languageLocaleCode",
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
    languageCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "languageCode",
        type: "xsd:normalizedString",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    languageLocaleCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "languageLocaleCode",
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
	  NameType: {
      type: "string",
      wsdlDefinition: {
        name: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "A character string that consititues the distinctive designation of a person, place, thing or concept"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:string",
            "xsd:attribute": [
              {
                name: "languageCode",
                type: "xsd:normalizedString",
                attribute: true
              },
              {
                name: "languageLocaleCode",
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
    languageCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "languageCode",
        type: "xsd:normalizedString",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    languageLocaleCode: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "languageLocaleCode",
        type: "xsd:normalizedString",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeNameType;
Modeler.register(TypeNameType, "TypeNameType");
