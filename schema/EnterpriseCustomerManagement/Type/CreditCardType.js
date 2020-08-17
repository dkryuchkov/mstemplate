var Modeler = require("../Modeler.js");
var className = 'TypeCreditCardType';

var TypeCreditCardType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Credit Card. Examples are Visa, MasterCard etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Number: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Number",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Card Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CardHolderName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CardHolderName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the Card Holder"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CompanyName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CompanyName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Business Name identified for the card if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ExpirationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Expiration Date of the card"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationMonth: {
      type: "TypeMonthType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationMonth",
        type: "MonthType",
        "xsd:annotation": {
          "xsd:documentation": "Expiration Month of the Card"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Expiration Year of the card"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CardHolderAddress: {
      type: "TypeAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CardHolderAddress",
        type: "AddressType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CardHolderBillingAddress: {
      type: "TypeAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CardHolderBillingAddress",
        type: "AddressType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SecurityCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SecurityCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Security Code on the card"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCreditCardType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCreditCardType",
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
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Credit Card. Examples are Visa, MasterCard etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Number: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Number",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Card Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CardHolderName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CardHolderName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the Card Holder"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CompanyName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CompanyName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Business Name identified for the card if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ExpirationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Expiration Date of the card"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationMonth: {
      type: "TypeMonthType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationMonth",
        type: "MonthType",
        "xsd:annotation": {
          "xsd:documentation": "Expiration Month of the Card"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Expiration Year of the card"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CardHolderAddress: {
      type: "TypeAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CardHolderAddress",
        type: "AddressType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CardHolderBillingAddress: {
      type: "TypeAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CardHolderBillingAddress",
        type: "AddressType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SecurityCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SecurityCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Security Code on the card"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCreditCardType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCreditCardType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreditCardType;
Modeler.register(TypeCreditCardType, "TypeCreditCardType");
