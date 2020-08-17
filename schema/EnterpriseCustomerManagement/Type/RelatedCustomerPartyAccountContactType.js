var Modeler = require("../Modeler.js");
var className = 'TypeRelatedCustomerPartyAccountContactType';

var TypeRelatedCustomerPartyAccountContactType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelationshipCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RelationshipCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Relationship Type. Some example values are : Spouse, Children, Lawyer etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PriorityRanking: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PriorityRanking",
        type: "WL5G3N2:NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Priority of the related Contact    -  Lowest number is highest priority, used for defaulting."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReciprocalIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ReciprocalIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the relationship is reciprocal"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Contact: {
      type: "TypeContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Contact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "Related Contact"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Defines the relationship effective date."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRelatedCustomerPartyAccountContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomRelatedCustomerPartyAccountContactType",
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelationshipCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RelationshipCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Relationship Type. Some example values are : Spouse, Children, Lawyer etc."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PriorityRanking: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PriorityRanking",
        type: "WL5G3N2:NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Priority of the related Contact    -  Lowest number is highest priority, used for defaulting."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReciprocalIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ReciprocalIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the relationship is reciprocal"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Contact: {
      type: "TypeContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Contact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "Related Contact"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Defines the relationship effective date."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRelatedCustomerPartyAccountContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomRelatedCustomerPartyAccountContactType",
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

module.exports = TypeRelatedCustomerPartyAccountContactType;
Modeler.register(TypeRelatedCustomerPartyAccountContactType, "TypeRelatedCustomerPartyAccountContactType");
