var Modeler = require("../Modeler.js");
var className = 'TypeOrganizationCreditRatingType';

var TypeOrganizationCreditRatingType = function(json, parentObj) {
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
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A textual description of the rating effort"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    RatingCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RatingCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The rating company's rating number or code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RatingDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RatingDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date that the rating was acquired"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DebarmentIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DebarmentIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the company is debarred from doing business with government agencies"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DebarmentCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DebarmentCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Count of filings by government agencies in the United States that prohibit the party from entering into contracts or transactions with those agencies"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastDebarmentDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LastDebarmentDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of most recent filing to prohibit the party from entering into contracts or transactions with a government agency in the United States"
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
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditRatingPartyReference: {
      type: "TypeCreditRatingPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditRatingPartyReference",
        type: "CreditRatingPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Rating provider party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CommercialCreditScore: {
      type: "TypeCommercialCreditScoreType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CommercialCreditScore",
        type: "CommercialCreditScoreType",
        "xsd:annotation": {
          "xsd:documentation": "Commercial credit score of the credit rating"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FailureRisk: {
      type: "TypeFailureRiskType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FailureRisk",
        type: "FailureRiskType",
        "xsd:annotation": {
          "xsd:documentation": "Failure risk details of the credit rating"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Paydex: {
      type: "TypePaydexType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Paydex",
        type: "PaydexType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex details of the credit rating"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ParentBankruptcy: {
      type: "TypeBankruptcyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ParentBankruptcy",
        type: "BankruptcyType",
        "xsd:annotation": {
          "xsd:documentation": "Parent Bankruptcy details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomOrganizationCreditRatingType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomOrganizationCreditRatingType",
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
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "A textual description of the rating effort"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    RatingCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RatingCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The rating company's rating number or code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RatingDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RatingDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date that the rating was acquired"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DebarmentIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DebarmentIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the company is debarred from doing business with government agencies"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DebarmentCount: {
      type: "TypePositiveIntegerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DebarmentCount",
        type: "PositiveIntegerType",
        "xsd:annotation": {
          "xsd:documentation": "Count of filings by government agencies in the United States that prohibit the party from entering into contracts or transactions with those agencies"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastDebarmentDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LastDebarmentDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of most recent filing to prohibit the party from entering into contracts or transactions with a government agency in the United States"
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
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditRatingPartyReference: {
      type: "TypeCreditRatingPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditRatingPartyReference",
        type: "CreditRatingPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Rating provider party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CommercialCreditScore: {
      type: "TypeCommercialCreditScoreType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CommercialCreditScore",
        type: "CommercialCreditScoreType",
        "xsd:annotation": {
          "xsd:documentation": "Commercial credit score of the credit rating"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FailureRisk: {
      type: "TypeFailureRiskType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FailureRisk",
        type: "FailureRiskType",
        "xsd:annotation": {
          "xsd:documentation": "Failure risk details of the credit rating"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Paydex: {
      type: "TypePaydexType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Paydex",
        type: "PaydexType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex details of the credit rating"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ParentBankruptcy: {
      type: "TypeBankruptcyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ParentBankruptcy",
        type: "BankruptcyType",
        "xsd:annotation": {
          "xsd:documentation": "Parent Bankruptcy details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomOrganizationCreditRatingType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomOrganizationCreditRatingType",
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

module.exports = TypeOrganizationCreditRatingType;
Modeler.register(TypeOrganizationCreditRatingType, "TypeOrganizationCreditRatingType");
