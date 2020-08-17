var Modeler = require("../Modeler.js");
var className = 'ElementFinancialAccountFinancialInstitutionBranchBusinessUnit';

var ElementFinancialAccountFinancialInstitutionBranchBusinessUnit = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialAccountFinancialInstitutionBranchBusinessUnit: {
      type: "TypeFinancialAccountFinancialInstitutionBranchBusinessUnitType",
      wsdlDefinition: {
        name: "FinancialAccountFinancialInstitutionBranchBusinessUnit",
        type: "FinancialAccountFinancialInstitutionBranchBusinessUnitType",
        "xsd:annotation": {
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          },
          "xsd:documentation": "A Financial Account's business reference component referring to a branch of a financial institution as a business unit of an enterprise."
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
	  FinancialAccountFinancialInstitutionBranchBusinessUnit: {
      type: "TypeFinancialAccountFinancialInstitutionBranchBusinessUnitType",
      wsdlDefinition: {
        name: "FinancialAccountFinancialInstitutionBranchBusinessUnit",
        type: "FinancialAccountFinancialInstitutionBranchBusinessUnitType",
        "xsd:annotation": {
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          },
          "xsd:documentation": "A Financial Account's business reference component referring to a branch of a financial institution as a business unit of an enterprise."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialAccountFinancialInstitutionBranchBusinessUnit;
Modeler.register(ElementFinancialAccountFinancialInstitutionBranchBusinessUnit, "ElementFinancialAccountFinancialInstitutionBranchBusinessUnit");
