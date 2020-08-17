var Modeler = require("../Modeler.js");
var className = 'TypeRelatedCustomerPartyAccountType';

var TypeRelatedCustomerPartyAccountType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the RelatedCustomerParty Business Component"
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
          "xsd:documentation": "Relationship Type. Some example values are : ShipTo, BillTo, SoldTo, Broker, Indirect, Payto, RemitFrom etc."
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
          "xsd:documentation": "Priority of the related Customer Party    -  Lowest number is highest priority, used for defaulting."
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
      type: "TypeCustomRelatedCustomerPartyAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomRelatedCustomerPartyAccountType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelatedCustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelatedCustomerPartyAccountIdentification",
        type: "CustomerPartyAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Related Customer Party Account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelatedCustomerPartyAccountReference: {
      type: "TypeCustomerPartyAccountReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelatedCustomerPartyAccountReference",
        type: "CustomerPartyAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Support relationship with other customer party accounts."
        },
        attribute: false,
        ns: "WL5G3N2"
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
          "xsd:documentation": "Identification of the RelatedCustomerParty Business Component"
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
          "xsd:documentation": "Relationship Type. Some example values are : ShipTo, BillTo, SoldTo, Broker, Indirect, Payto, RemitFrom etc."
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
          "xsd:documentation": "Priority of the related Customer Party    -  Lowest number is highest priority, used for defaulting."
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
      type: "TypeCustomRelatedCustomerPartyAccountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomRelatedCustomerPartyAccountType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelatedCustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelatedCustomerPartyAccountIdentification",
        type: "CustomerPartyAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Related Customer Party Account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelatedCustomerPartyAccountReference: {
      type: "TypeCustomerPartyAccountReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelatedCustomerPartyAccountReference",
        type: "CustomerPartyAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Support relationship with other customer party accounts."
        },
        attribute: false,
        ns: "WL5G3N2"
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

module.exports = TypeRelatedCustomerPartyAccountType;
Modeler.register(TypeRelatedCustomerPartyAccountType, "TypeRelatedCustomerPartyAccountType");
