var Modeler = require("../Modeler.js");
var className = 'TypeBillToPartyReferenceType';

var TypeBillToPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyIdentification",
        type: "PartyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationReference",
        type: "LocationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the Organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonName",
        type: "PersonNameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillingProfileReference: {
      type: "TypeBillingProfileReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillingProfileReference",
        type: "BillingProfileReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CustomerPartyAccountIdentification",
        type: "CustomerPartyAccountIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the bill is detail or summary"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MediaTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MediaTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of media on which the bill is to be presented. Example - \nPrinted, Electronic Tranmission, Tape, Disk, etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NumberOfCopies: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NumberOfCopies",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of copies printed or copies of media) that are to be made \nat the time of printing"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HoldBillIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HoldBillIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the bill receivable should be held or not"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBillToPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBillToPartyReferenceType",
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
	  PartyIdentification: {
      type: "TypePartyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PartyIdentification",
        type: "PartyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationReference",
        type: "LocationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:OrganizationName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the Organization"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PersonName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonName",
        type: "PersonNameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillingProfileReference: {
      type: "TypeBillingProfileReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillingProfileReference",
        type: "BillingProfileReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CustomerPartyAccountIdentification: {
      type: "TypeCustomerPartyAccountIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CustomerPartyAccountIdentification",
        type: "CustomerPartyAccountIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the bill is detail or summary"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MediaTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MediaTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of media on which the bill is to be presented. Example - \nPrinted, Electronic Tranmission, Tape, Disk, etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NumberOfCopies: {
      type: "TypeIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NumberOfCopies",
        type: "IntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Number of copies printed or copies of media) that are to be made \nat the time of printing"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HoldBillIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HoldBillIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the bill receivable should be held or not"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBillToPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBillToPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBillToPartyReferenceType;
Modeler.register(TypeBillToPartyReferenceType, "TypeBillToPartyReferenceType");
