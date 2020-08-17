var Modeler = require("../Modeler.js");
var className = 'TypeSpecialNeedProfileType';

var TypeSpecialNeedProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LifeSupportIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:LifeSupportIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customerparty has life support."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SeniorCitizenIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:SeniorCitizenIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customerparty is a senior citizen or caters to senior citizens."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DisabledIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DisabledIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customerparty is disabled or caters to the disabled."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConfidentialityIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ConfidentialityIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether this customerparty should be confidential customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AbusiveCustomerIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:AbusiveCustomerIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customerparty is an abusive customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditProblemIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditProblemIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customerparty has a credit problem."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:Description",
        type: "WL5G3N2:TextType",
        "xsd:annotation": {
          "xsd:documentation": "Captures a general description/comment related to the customerparty's  special needs."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomSpecialNeedProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomSpecialNeedProfileType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
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
	  LifeSupportIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:LifeSupportIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customerparty has life support."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SeniorCitizenIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:SeniorCitizenIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customerparty is a senior citizen or caters to senior citizens."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DisabledIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DisabledIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customerparty is disabled or caters to the disabled."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ConfidentialityIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ConfidentialityIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether this customerparty should be confidential customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AbusiveCustomerIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:AbusiveCustomerIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customerparty is an abusive customer."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditProblemIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:CreditProblemIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customerparty has a credit problem."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:Description",
        type: "WL5G3N2:TextType",
        "xsd:annotation": {
          "xsd:documentation": "Captures a general description/comment related to the customerparty's  special needs."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomSpecialNeedProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomSpecialNeedProfileType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSpecialNeedProfileType;
Modeler.register(TypeSpecialNeedProfileType, "TypeSpecialNeedProfileType");
