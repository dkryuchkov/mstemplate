var Modeler = require("../Modeler.js");
var className = 'TypeEducationRecordType';

var TypeEducationRecordType = function(json, parentObj) {
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
    ClassYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClassYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Class of graduation. This may be the year of graduation, the starting at the school or others."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MajorCourseCategory: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MajorCourseCategory",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Primary area of study"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AbbreviatedEducationalDegree: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AbbreviatedEducationalDegree",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Abbreviation for the degree. For example, BA, BSc, MBA, MSc, PhD, Gd (graduate diploma)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AttendanceLastDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AttendanceLastDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The year and month a person last attended the educational institution"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AttendanceStartDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AttendanceStartDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date that the person's attendance starts"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EducationalInstitutionReference: {
      type: "TypeEducationalInstitutionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EducationalInstitutionReference",
        type: "EducationalInstitutionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEducationRecordType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEducationRecordType",
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
    ClassYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ClassYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Class of graduation. This may be the year of graduation, the starting at the school or others."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MajorCourseCategory: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MajorCourseCategory",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Primary area of study"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AbbreviatedEducationalDegree: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AbbreviatedEducationalDegree",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Abbreviation for the degree. For example, BA, BSc, MBA, MSc, PhD, Gd (graduate diploma)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AttendanceLastDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AttendanceLastDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The year and month a person last attended the educational institution"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AttendanceStartDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AttendanceStartDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date that the person's attendance starts"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EducationalInstitutionReference: {
      type: "TypeEducationalInstitutionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EducationalInstitutionReference",
        type: "EducationalInstitutionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEducationRecordType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEducationRecordType",
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

module.exports = TypeEducationRecordType;
Modeler.register(TypeEducationRecordType, "TypeEducationRecordType");
