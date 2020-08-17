var Modeler = require("../Modeler.js");
var className = 'TypeCustomOrganizationFinancialNumberType';

var TypeCustomOrganizationFinancialNumberType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomOrganizationFinancialNumberType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationFinancialNumberType",
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
	  CustomOrganizationFinancialNumberType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationFinancialNumberType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOrganizationFinancialNumberType;
Modeler.register(TypeCustomOrganizationFinancialNumberType, "TypeCustomOrganizationFinancialNumberType");
