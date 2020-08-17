var Modeler = require("../Modeler.js");
var className = 'TypeCRSType';

var TypeCRSType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CRSSelfCertificationFirstObtainedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSSelfCertificationFirstObtainedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSSelfCertificationLastUpdatedBy: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSSelfCertificationLastUpdatedBy",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSSelfCertificationLastUpdatedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSSelfCertificationLastUpdatedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResidentOfOtherCountryForTaxPurposes: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ResidentOfOtherCountryForTaxPurposes",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSSelfCertificationMethod: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSSelfCertificationMethod",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSSelfCertificationChannel: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSSelfCertificationChannel",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSCuredDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSCuredDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSConflictingReasonCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSConflictingReasonCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSConflictingReasonDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSConflictingReasonDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSPassiveIncomeIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSPassiveIncomeIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSInvestmentEntityIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSInvestmentEntityIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfForeignTaxDetails: {
      type: "TypeListOfForeignTaxDetailsType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ListOfForeignTaxDetails",
        type: "ListOfForeignTaxDetailsType",
        attribute: false,
        ns: "corecustomerpartycust"
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
	  CRSSelfCertificationFirstObtainedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSSelfCertificationFirstObtainedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSSelfCertificationLastUpdatedBy: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSSelfCertificationLastUpdatedBy",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSSelfCertificationLastUpdatedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSSelfCertificationLastUpdatedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ResidentOfOtherCountryForTaxPurposes: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ResidentOfOtherCountryForTaxPurposes",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSSelfCertificationMethod: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSSelfCertificationMethod",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSSelfCertificationChannel: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSSelfCertificationChannel",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSCuredDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSCuredDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSConflictingReasonCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSConflictingReasonCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSConflictingReasonDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSConflictingReasonDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSPassiveIncomeIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSPassiveIncomeIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CRSInvestmentEntityIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CRSInvestmentEntityIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfForeignTaxDetails: {
      type: "TypeListOfForeignTaxDetailsType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ListOfForeignTaxDetails",
        type: "ListOfForeignTaxDetailsType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCRSType;
Modeler.register(TypeCRSType, "TypeCRSType");
