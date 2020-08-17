var Modeler = require("../Modeler.js");
var className = 'ElementFinancialInstitutionBranchBusinessUnitReference';

var ElementFinancialInstitutionBranchBusinessUnitReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialInstitutionBranchBusinessUnitReference: {
      type: "TypeFinancialInstitutionBranchBusinessUnitReferenceType",
      wsdlDefinition: {
        name: "FinancialInstitutionBranchBusinessUnitReference",
        type: "FinancialInstitutionBranchBusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a business unit that represents a branch location of a financial institution.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
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
        name: "FinancialInstitutionBranchBusinessUnitReference",
        type: "FinancialInstitutionBranchBusinessUnitReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a business unit that represents a branch location of a financial institution.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialInstitutionBranchBusinessUnitReference;
Modeler.register(ElementFinancialInstitutionBranchBusinessUnitReference, "ElementFinancialInstitutionBranchBusinessUnitReference");
