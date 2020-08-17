var Modeler = require("../Modeler.js");
var className = 'TypeTextType';

var TypeTextType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TextType: {
      type: "string",
      wsdlDefinition: {
        name: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A character string (i.e. a finite set of characters) generally in the form of words of a language"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:normalizedString",
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
	  TextType: {
      type: "string",
      wsdlDefinition: {
        name: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A character string (i.e. a finite set of characters) generally in the form of words of a language"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:normalizedString",
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

module.exports = TypeTextType;
Modeler.register(TypeTextType, "TypeTextType");
