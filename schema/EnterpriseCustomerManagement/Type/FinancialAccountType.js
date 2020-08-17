var Modeler = require("../Modeler.js");
var className = 'TypeFinancialAccountType';

var TypeFinancialAccountType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialAccountIdentification: {
      type: "TypeFinancialAccountIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccountIdentification",
        type: "FinancialAccountIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identifier of the Account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the Account. Examples are Savings, Loan-1 etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A short name that classifies accounts. For example, savings, checking, home loan, personal loan, trading, and so on"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    JointHoldingIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:JointHoldingIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "This indicates if the financial account has a single or joint holding ownership."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    JointOperationTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:JointOperationTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the operation mode for an account in case of joint holding ownership. E.g., Self, Any one of us etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CurrencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Currency Code in which the account is maintained"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description of the account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    FinancialInstitutionReference: {
      type: "TypeFinancialInstitutionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialInstitutionReference",
        type: "FinancialInstitutionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialAccountFinancialInstitutionBranchBusinessUnit: {
      type: "TypeFinancialAccountFinancialInstitutionBranchBusinessUnitType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccountFinancialInstitutionBranchBusinessUnit",
        type: "FinancialAccountFinancialInstitutionBranchBusinessUnitType",
        "xsd:annotation": {
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the product or  item of a financial account. E.g. Term Deposit 30 days notice, First time buyer mortgage",
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
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
          "xsd:documentation": "Status of the account, whether it is normal status, written off etc.",
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialAccountHolder: {
      type: "TypeFinancialAccountHolderType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccountHolder",
        type: "FinancialAccountHolderType",
        "xsd:annotation": {
          "xsd:documentation": "An account may be owned by one or more parties."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomBankAccountReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBankAccountReferenceType",
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
	  FinancialAccountIdentification: {
      type: "TypeFinancialAccountIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccountIdentification",
        type: "FinancialAccountIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AccountNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identifier of the Account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the Account. Examples are Savings, Loan-1 etc"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A short name that classifies accounts. For example, savings, checking, home loan, personal loan, trading, and so on"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    JointHoldingIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:JointHoldingIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "This indicates if the financial account has a single or joint holding ownership."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    JointOperationTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:JointOperationTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates the operation mode for an account in case of joint holding ownership. E.g., Self, Any one of us etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CurrencyCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CurrencyCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Currency Code in which the account is maintained"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description of the account"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    FinancialInstitutionReference: {
      type: "TypeFinancialInstitutionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialInstitutionReference",
        type: "FinancialInstitutionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialAccountFinancialInstitutionBranchBusinessUnit: {
      type: "TypeFinancialAccountFinancialInstitutionBranchBusinessUnitType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccountFinancialInstitutionBranchBusinessUnit",
        type: "FinancialAccountFinancialInstitutionBranchBusinessUnitType",
        "xsd:annotation": {
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the product or  item of a financial account. E.g. Term Deposit 30 days notice, First time buyer mortgage",
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
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
          "xsd:documentation": "Status of the account, whether it is normal status, written off etc.",
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialAccountHolder: {
      type: "TypeFinancialAccountHolderType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccountHolder",
        type: "FinancialAccountHolderType",
        "xsd:annotation": {
          "xsd:documentation": "An account may be owned by one or more parties."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomBankAccountReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBankAccountReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFinancialAccountType;
Modeler.register(TypeFinancialAccountType, "TypeFinancialAccountType");
