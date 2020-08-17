var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyBestVisitationTimeType';

var TypeCustomerPartyBestVisitationTimeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "unique identification of CustomerPartyBestVisitationTime"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DayOfWeekCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DayOfWeekCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Preferred day(s) of the week when customer  is ok to see sales representatives. E.g. Monday, Tuesday, Wednesday."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Comment: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:Comment",
        type: "WL5G3N2:TextType",
        "xsd:annotation": {
          "xsd:documentation": "Additional comments."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TimeDuration: {
      type: "TypeTimeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TimeDuration",
        type: "TimeDurationType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the time period of the best visit time."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyBestVisitationTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyBestVisitationTimeType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyLocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CustomerPartyLocationIdentification",
        type: "LocationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Points to one of  the CustomerPartyLocation."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyRelatedOrganizationPartyIdentification: {
      type: "TypePartyRelatedOrganizationPartyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedOrganizationPartyIdentification",
        type: "PartyRelatedOrganizationPartyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Point to PartyRelatedParty which is an organization. For example, sales representatitives can visit a doctor at the specified hospital related to that doctor."
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
          "xsd:documentation": "unique identification of CustomerPartyBestVisitationTime"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DayOfWeekCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DayOfWeekCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Preferred day(s) of the week when customer  is ok to see sales representatives. E.g. Monday, Tuesday, Wednesday."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Comment: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:Comment",
        type: "WL5G3N2:TextType",
        "xsd:annotation": {
          "xsd:documentation": "Additional comments."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TimeDuration: {
      type: "TypeTimeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TimeDuration",
        type: "TimeDurationType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the time period of the best visit time."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyBestVisitationTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyBestVisitationTimeType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyLocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CustomerPartyLocationIdentification",
        type: "LocationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Points to one of  the CustomerPartyLocation."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyRelatedOrganizationPartyIdentification: {
      type: "TypePartyRelatedOrganizationPartyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyRelatedOrganizationPartyIdentification",
        type: "PartyRelatedOrganizationPartyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Point to PartyRelatedParty which is an organization. For example, sales representatitives can visit a doctor at the specified hospital related to that doctor."
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

module.exports = TypeCustomerPartyBestVisitationTimeType;
Modeler.register(TypeCustomerPartyBestVisitationTimeType, "TypeCustomerPartyBestVisitationTimeType");
