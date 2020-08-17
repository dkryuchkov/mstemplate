var Modeler = require("../Modeler.js");
var className = 'TypeInvestmentRestrictionType';

var TypeInvestmentRestrictionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The type of restriction such as industry, instrument, issuer, analysis group etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InstructionTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InstructionTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This field indicates the Restriction Category, e.g., buy,sell or both"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PortfolioTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PortfolioTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "To associate the restriction for each portfolio type. Ex. RM Manage, SelfManaged, and Discretionary"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Details of the restriction for example indicating the issuers, instruments , Instrument group and Instrument type  value."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Effectivity: {
      type: "TypeEffectivityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Effectivity",
        type: "EffectivityType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInvestmentRestrictionType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInvestmentRestrictionType",
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
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The type of restriction such as industry, instrument, issuer, analysis group etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InstructionTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InstructionTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "This field indicates the Restriction Category, e.g., buy,sell or both"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PortfolioTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PortfolioTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "To associate the restriction for each portfolio type. Ex. RM Manage, SelfManaged, and Discretionary"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Details of the restriction for example indicating the issuers, instruments , Instrument group and Instrument type  value."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Effectivity: {
      type: "TypeEffectivityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Effectivity",
        type: "EffectivityType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomInvestmentRestrictionType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomInvestmentRestrictionType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInvestmentRestrictionType;
Modeler.register(TypeInvestmentRestrictionType, "TypeInvestmentRestrictionType");
