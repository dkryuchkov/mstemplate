var Modeler = require("../Modeler.js");
var className = 'TypeFinancialPortfolioRelatedPartyType';

var TypeFinancialPortfolioRelatedPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Uniquely identifies the association between the Financial Portfolio and the related party."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialPortfolioRelatedPartyRole: {
      type: "TypeFinancialPortfolioRelatedPartyRoleType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:FinancialPortfolioRelatedPartyRole",
        type: "FinancialPortfolioRelatedPartyRoleType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialPortfolioRelatedPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialPortfolioRelatedPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialPortfolioRelatedPersonParty: {
      type: "TypeFinancialPortfolioRelatedPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialPortfolioRelatedPersonParty",
        type: "FinancialPortfolioRelatedPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialPortfolioRelatedOrganizationParty: {
      type: "TypeFinancialPortfolioRelatedOrganizationPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialPortfolioRelatedOrganizationParty",
        type: "FinancialPortfolioRelatedOrganizationPartyType",
        "xsd:annotation": {
          "xsd:documentation": "An organization related to theFinancial Portfolio."
        },
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
          "xsd:documentation": "Uniquely identifies the association between the Financial Portfolio and the related party."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialPortfolioRelatedPartyRole: {
      type: "TypeFinancialPortfolioRelatedPartyRoleType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:FinancialPortfolioRelatedPartyRole",
        type: "FinancialPortfolioRelatedPartyRoleType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialPortfolioRelatedPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialPortfolioRelatedPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialPortfolioRelatedPersonParty: {
      type: "TypeFinancialPortfolioRelatedPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialPortfolioRelatedPersonParty",
        type: "FinancialPortfolioRelatedPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FinancialPortfolioRelatedOrganizationParty: {
      type: "TypeFinancialPortfolioRelatedOrganizationPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialPortfolioRelatedOrganizationParty",
        type: "FinancialPortfolioRelatedOrganizationPartyType",
        "xsd:annotation": {
          "xsd:documentation": "An organization related to theFinancial Portfolio."
        },
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

module.exports = TypeFinancialPortfolioRelatedPartyType;
Modeler.register(TypeFinancialPortfolioRelatedPartyType, "TypeFinancialPortfolioRelatedPartyType");
