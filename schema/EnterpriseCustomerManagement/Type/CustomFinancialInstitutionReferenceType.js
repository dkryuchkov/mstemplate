var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialInstitutionReferenceType';

var TypeCustomFinancialInstitutionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialInstitutionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialInstitutionReferenceType",
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
	  CustomFinancialInstitutionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialInstitutionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialInstitutionReferenceType;
Modeler.register(TypeCustomFinancialInstitutionReferenceType, "TypeCustomFinancialInstitutionReferenceType");
