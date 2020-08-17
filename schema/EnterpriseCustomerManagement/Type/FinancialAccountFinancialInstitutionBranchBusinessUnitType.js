var Modeler = require("../Modeler.js");
var className = 'TypeFinancialAccountFinancialInstitutionBranchBusinessUnitType';

var TypeFinancialAccountFinancialInstitutionBranchBusinessUnitType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialInstitutionBranchBusinessUnitReference: {
      type: "TypeFinancialInstitutionBranchBusinessUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialInstitutionBranchBusinessUnitReference",
        type: "FinancialInstitutionBranchBusinessUnitReferenceType",
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
    FinancialAccountFinancialInstitutionBranchBusinessUnitLocation: {
      type: "TypeFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccountFinancialInstitutionBranchBusinessUnitLocation",
        type: "FinancialAccountFinancialInstitutionBranchBusinessUnitLocationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialAccountFinancialInstitutionBranchBusinessUnitType",
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
	  FinancialInstitutionBranchBusinessUnitReference: {
      type: "TypeFinancialInstitutionBranchBusinessUnitReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialInstitutionBranchBusinessUnitReference",
        type: "FinancialInstitutionBranchBusinessUnitReferenceType",
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
    FinancialAccountFinancialInstitutionBranchBusinessUnitLocation: {
      type: "TypeFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FinancialAccountFinancialInstitutionBranchBusinessUnitLocation",
        type: "FinancialAccountFinancialInstitutionBranchBusinessUnitLocationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomFinancialAccountFinancialInstitutionBranchBusinessUnitType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFinancialAccountFinancialInstitutionBranchBusinessUnitType;
Modeler.register(TypeFinancialAccountFinancialInstitutionBranchBusinessUnitType, "TypeFinancialAccountFinancialInstitutionBranchBusinessUnitType");
