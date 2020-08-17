var Modeler = require("../Modeler.js");
var className = 'TypeEmploymentRecordType';

var TypeEmploymentRecordType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmployerOrganizationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:EmployerOrganizationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The name of the organization at which the person was employeed.  Note that the name should not include the division name"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EmployerDivisionName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:EmployerDivisionName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The common name of a division or an organization in which the person was employed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    JobTitleCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:JobTitleCode",
        type: "CodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    JobTitle: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:JobTitle",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Job position title assigned by an employer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    StartDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date that the employment officially began"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date that the employment officially ended"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmploymentDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmploymentDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "The duration of the employment."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PositionTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PositionTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The status of the Employment, e.g., Part-time, Full time."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SupervisorName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:SupervisorName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Full name of the person's manager"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ResponsibilityName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ResponsibilityName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Job responsibility of the person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TenureCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TenureCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of tenure for faculty positions"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WeeklyWorkDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WeeklyWorkDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Usual number of hours worked per week"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmployerPartyReference: {
      type: "TypeEmployerPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmployerPartyReference",
        type: "EmployerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Employer Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MilitaryEmployment: {
      type: "TypeMilitaryEmploymentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MilitaryEmployment",
        type: "MilitaryEmploymentType",
        "xsd:annotation": {
          "xsd:documentation": "Military Employment details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEmploymentRecordType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEmploymentRecordType",
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
          "xsd:documentation": "Unique identification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmployerOrganizationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:EmployerOrganizationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The name of the organization at which the person was employeed.  Note that the name should not include the division name"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EmployerDivisionName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:EmployerDivisionName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "The common name of a division or an organization in which the person was employed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    JobTitleCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:JobTitleCode",
        type: "CodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    JobTitle: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:JobTitle",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Job position title assigned by an employer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    StartDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date that the employment officially began"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date that the employment officially ended"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmploymentDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmploymentDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "The duration of the employment."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PositionTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PositionTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The status of the Employment, e.g., Part-time, Full time."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SupervisorName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:SupervisorName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Full name of the person's manager"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ResponsibilityName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ResponsibilityName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Job responsibility of the person"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TenureCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TenureCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of tenure for faculty positions"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WeeklyWorkDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WeeklyWorkDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Usual number of hours worked per week"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmployerPartyReference: {
      type: "TypeEmployerPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmployerPartyReference",
        type: "EmployerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Employer Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MilitaryEmployment: {
      type: "TypeMilitaryEmploymentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MilitaryEmployment",
        type: "MilitaryEmploymentType",
        "xsd:annotation": {
          "xsd:documentation": "Military Employment details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEmploymentRecordType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEmploymentRecordType",
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
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEmploymentRecordType;
Modeler.register(TypeEmploymentRecordType, "TypeEmploymentRecordType");
