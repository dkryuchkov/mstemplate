var Modeler = require("../Modeler.js");
var className = 'TypePersonNationalIdentityType';

var TypePersonNationalIdentityType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "The ID of the identity such as social security, national birth certificate number or other kinds of unique keys will be captured here."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssuingCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuingCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The country that issued the person's National ID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "key for the type of the person's national ID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrimaryIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this the person's primary National ID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxIDIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxIDIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the person's national ID is also used as their employer tax reference number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssueDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssueDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Person National Identiry Issue date"
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
          "xsd:documentation": "Person National Identiry expiration date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPersonNationalIdentityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPersonNationalIdentityType",
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
          "xsd:documentation": "The ID of the identity such as social security, national birth certificate number or other kinds of unique keys will be captured here."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssuingCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuingCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The country that issued the person's National ID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "key for the type of the person's national ID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrimaryIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if this the person's primary National ID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxIDIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TaxIDIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the person's national ID is also used as their employer tax reference number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IssueDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssueDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Person National Identiry Issue date"
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
          "xsd:documentation": "Person National Identiry expiration date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPersonNationalIdentityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPersonNationalIdentityType",
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

module.exports = TypePersonNationalIdentityType;
Modeler.register(TypePersonNationalIdentityType, "TypePersonNationalIdentityType");
