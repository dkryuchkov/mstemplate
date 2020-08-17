var Modeler = require("../Modeler.js");
var className = 'TypeBeneficiaryType';

var TypeBeneficiaryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of Beneficiary, e.g., primary or contingent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SplitPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SplitPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage dued to this beneficiary"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBeneficiaryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBeneficiaryType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BeneficiaryPersonParty: {
      type: "TypeBeneficiaryPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BeneficiaryPersonParty",
        type: "BeneficiaryPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BeneficiaryOrganizationParty: {
      type: "TypeBeneficiaryOrganizationPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BeneficiaryOrganizationParty",
        type: "BeneficiaryOrganizationPartyType",
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
          "xsd:documentation": "Type of Beneficiary, e.g., primary or contingent"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SplitPercent: {
      type: "TypePercentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SplitPercent",
        type: "PercentType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage dued to this beneficiary"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBeneficiaryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBeneficiaryType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BeneficiaryPersonParty: {
      type: "TypeBeneficiaryPersonPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BeneficiaryPersonParty",
        type: "BeneficiaryPersonPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BeneficiaryOrganizationParty: {
      type: "TypeBeneficiaryOrganizationPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BeneficiaryOrganizationParty",
        type: "BeneficiaryOrganizationPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBeneficiaryType;
Modeler.register(TypeBeneficiaryType, "TypeBeneficiaryType");
