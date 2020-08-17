var Modeler = require("../Modeler.js");
var className = 'TypePersonAffiliationType';

var TypePersonAffiliationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of the Person Affiliation entity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AffiliationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AffiliationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code specifying the relationship/affiliation, e.g., values: Student, Alumni, Prospective Student, Faculty, Visiting Professor, Work-Study, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PriorityRanking: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PriorityRanking",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "A deploying company can use this field to rank the affiliation. The ranking can go across a number of persons, Affliation Codes, and/or institutions (the OrganizatonReference)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationReference: {
      type: "TypeOrganizationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationReference",
        type: "OrganizationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Organization with which the person is affiliated"
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
          "xsd:documentation": "Effective time period of license"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "The status of the affiliation, e.g., active, inactive, error"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPersonAffiliationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPersonAffiliationType",
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
        type: "ActionCodeType",
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
          "xsd:documentation": "Unique identification of the Person Affiliation entity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AffiliationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AffiliationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Code specifying the relationship/affiliation, e.g., values: Student, Alumni, Prospective Student, Faculty, Visiting Professor, Work-Study, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PriorityRanking: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PriorityRanking",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "A deploying company can use this field to rank the affiliation. The ranking can go across a number of persons, Affliation Codes, and/or institutions (the OrganizatonReference)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationReference: {
      type: "TypeOrganizationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrganizationReference",
        type: "OrganizationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Organization with which the person is affiliated"
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
          "xsd:documentation": "Effective time period of license"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "The status of the affiliation, e.g., active, inactive, error"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPersonAffiliationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPersonAffiliationType",
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
        type: "ActionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePersonAffiliationType;
Modeler.register(TypePersonAffiliationType, "TypePersonAffiliationType");
