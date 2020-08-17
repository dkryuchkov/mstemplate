var Modeler = require("../Modeler.js");
var className = 'TypeCustomOrganizationFinancialStatementType';

var TypeCustomOrganizationFinancialStatementType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomOrganizationFinancialStatementType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationFinancialStatementType",
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
	  CustomOrganizationFinancialStatementType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationFinancialStatementType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOrganizationFinancialStatementType;
Modeler.register(TypeCustomOrganizationFinancialStatementType, "TypeCustomOrganizationFinancialStatementType");
