var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitType';

var TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialAccountFinancialInstitutionBranchBusinessUnitType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountFinancialInstitutionBranchBusinessUnitType",
        attribute: false,
        type: "xsd:string"
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
	  CustomFinancialAccountFinancialInstitutionBranchBusinessUnitType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountFinancialInstitutionBranchBusinessUnitType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitType;
Modeler.register(TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitType, "TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitType");
