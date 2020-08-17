var Modeler = require("../Modeler.js");
var className = 'TypeEFTType';

var TypeEFTType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Electronics Fund Transfer if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountHolder: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:AccountHolder",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Account Holder of the account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    RoutingNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RoutingNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Bank Routing Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BankName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:BankName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the Bank"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Number: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Number",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Number of the EFT document"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Memo: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Memo",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Memo"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IssuedDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuedDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The Issued Date for the payment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReceivingDepositoryFinancialInsitution: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReceivingDepositoryFinancialInsitution",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "RDFI is the institute which receives the ACH Automated  Clearing House's transaction for posting to receiver's account. RDFI is the  interface between the Receiver's account and the Cards Association network."
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
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Electronics Fund Transfer if applicable"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountHolder: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:AccountHolder",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Account Holder of the account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    RoutingNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RoutingNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Bank Routing Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BankName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:BankName",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the Bank"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Number: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Number",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Number of the EFT document"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Memo: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Memo",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Memo"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    IssuedDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IssuedDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The Issued Date for the payment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReceivingDepositoryFinancialInsitution: {
      type: "TypeStringType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReceivingDepositoryFinancialInsitution",
        type: "StringType",
        "xsd:annotation": {
          "xsd:documentation": "RDFI is the institute which receives the ACH Automated  Clearing House's transaction for posting to receiver's account. RDFI is the  interface between the Receiver's account and the Cards Association network."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEFTType;
Modeler.register(TypeEFTType, "TypeEFTType");
