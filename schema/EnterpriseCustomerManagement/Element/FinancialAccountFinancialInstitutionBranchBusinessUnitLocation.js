var Modeler = require("../Modeler.js");
var className = 'ElementFinancialAccountFinancialInstitutionBranchBusinessUnitLocation';

var ElementFinancialAccountFinancialInstitutionBranchBusinessUnitLocation = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialAccountFinancialInstitutionBranchBusinessUnitLocation: {
      type: "TypeFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType",
      wsdlDefinition: {
        name: "FinancialAccountFinancialInstitutionBranchBusinessUnitLocation",
        type: "FinancialAccountFinancialInstitutionBranchBusinessUnitLocationType",
        "xsd:annotation": {
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          },
          "xsd:documentation": "A Financial Institution Branch Business Unit's business reference component referring to the location of the business unit."
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
	  FinancialAccountFinancialInstitutionBranchBusinessUnitLocation: {
      type: "TypeFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType",
      wsdlDefinition: {
        name: "FinancialAccountFinancialInstitutionBranchBusinessUnitLocation",
        type: "FinancialAccountFinancialInstitutionBranchBusinessUnitLocationType",
        "xsd:annotation": {
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          },
          "xsd:documentation": "A Financial Institution Branch Business Unit's business reference component referring to the location of the business unit."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialAccountFinancialInstitutionBranchBusinessUnitLocation;
Modeler.register(ElementFinancialAccountFinancialInstitutionBranchBusinessUnitLocation, "ElementFinancialAccountFinancialInstitutionBranchBusinessUnitLocation");
