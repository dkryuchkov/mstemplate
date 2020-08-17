var Modeler = require("../Modeler.js");
var className = 'TypePrivacyProfileType';

var TypePrivacyProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OptOutIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OptOutIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the opt out option. Eg. opt out of telemarketing calls, mails, emails...etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SourceCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SourceCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the source from where this Privacy Profile was obtained."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReasonCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReasonCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the reason for applying the Opt Out, if any."
        },
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
	  OptOutIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OptOutIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the opt out option. Eg. opt out of telemarketing calls, mails, emails...etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SourceCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SourceCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the source from where this Privacy Profile was obtained."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReasonCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReasonCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the reason for applying the Opt Out, if any."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePrivacyProfileType;
Modeler.register(TypePrivacyProfileType, "TypePrivacyProfileType");
