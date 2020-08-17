var Modeler = require("../Modeler.js");
var className = 'TypeCustomOrganizationFinancialProfileType';

var TypeCustomOrganizationFinancialProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomOrganizationFinancialProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationFinancialProfileType",
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
	  CustomOrganizationFinancialProfileType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationFinancialProfileType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOrganizationFinancialProfileType;
Modeler.register(TypeCustomOrganizationFinancialProfileType, "TypeCustomOrganizationFinancialProfileType");
