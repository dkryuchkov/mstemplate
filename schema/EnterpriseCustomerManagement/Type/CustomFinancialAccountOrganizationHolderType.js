var Modeler = require("../Modeler.js");
var className = 'TypeCustomFinancialAccountOrganizationHolderType';

var TypeCustomFinancialAccountOrganizationHolderType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomFinancialAccountOrganizationHolderType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountOrganizationHolderType",
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
	  CustomFinancialAccountOrganizationHolderType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomFinancialAccountOrganizationHolderType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomFinancialAccountOrganizationHolderType;
Modeler.register(TypeCustomFinancialAccountOrganizationHolderType, "TypeCustomFinancialAccountOrganizationHolderType");
