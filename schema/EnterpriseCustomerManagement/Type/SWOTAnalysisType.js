var Modeler = require("../Modeler.js");
var className = 'TypeSWOTAnalysisType';

var TypeSWOTAnalysisType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StrengthsDescription: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:StrengthsDescription",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Attributes of the person or company that are helpful to achieving the objective(s)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    WeaknessesDescription: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:WeaknessesDescription",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Attributes of the person or company that are harmful to achieving the objective(s)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OpportunitiesDescription: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OpportunitiesDescription",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "External conditions that are helpful to achieving the objective(s)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ThreatsDescription: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ThreatsDescription",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "External conditions which could do damage to the objective(s)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomSWOTAnalysisType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSWOTAnalysisType",
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
	  StrengthsDescription: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:StrengthsDescription",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Attributes of the person or company that are helpful to achieving the objective(s)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    WeaknessesDescription: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:WeaknessesDescription",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Attributes of the person or company that are harmful to achieving the objective(s)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    OpportunitiesDescription: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OpportunitiesDescription",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "External conditions that are helpful to achieving the objective(s)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ThreatsDescription: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ThreatsDescription",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "External conditions which could do damage to the objective(s)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomSWOTAnalysisType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSWOTAnalysisType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSWOTAnalysisType;
Modeler.register(TypeSWOTAnalysisType, "TypeSWOTAnalysisType");
