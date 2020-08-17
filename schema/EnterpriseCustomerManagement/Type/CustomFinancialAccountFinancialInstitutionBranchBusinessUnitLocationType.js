var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType';

var TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType",
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
	  CustomFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType;
Modeler.register(TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType, "TypeCustomFinancialAccountFinancialInstitutionBranchBusinessUnitLocationType");
