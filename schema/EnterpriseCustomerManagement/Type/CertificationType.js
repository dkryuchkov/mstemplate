var Modeler = require("../Modeler.js");
var className = 'TypeCertificationType';

var TypeCertificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the certification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IssueDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssueDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date on which the certification was issued"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Expiration Date for the certification if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssuingAuthorityID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuingAuthorityID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Authority that issued the certification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QualifyingGrade: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QualifyingGrade",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Grade applicable for the certification - e.g. First Class,  Distinction etc"
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
	  Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the certification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IssueDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssueDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date on which the certification was issued"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Expiration Date for the certification if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssuingAuthorityID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuingAuthorityID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Authority that issued the certification"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QualifyingGrade: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QualifyingGrade",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "Grade applicable for the certification - e.g. First Class,  Distinction etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCertificationType;
Modeler.register(TypeCertificationType, "TypeCertificationType");
