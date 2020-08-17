var Modeler = require("../Modeler.js");
var className = 'ElementOrganizationFinancialNumber';

var ElementOrganizationFinancialNumber = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationFinancialNumber: {
      type: "TypeOrganizationFinancialNumberType",
      wsdlDefinition: {
        name: "OrganizationFinancialNumber",
        type: "OrganizationFinancialNumberType",
        "xsd:annotation": {
          "xsd:documentation": "Financial Numbers of a Financial Statement"
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
	  OrganizationFinancialNumber: {
      type: "TypeOrganizationFinancialNumberType",
      wsdlDefinition: {
        name: "OrganizationFinancialNumber",
        type: "OrganizationFinancialNumberType",
        "xsd:annotation": {
          "xsd:documentation": "Financial Numbers of a Financial Statement"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganizationFinancialNumber;
Modeler.register(ElementOrganizationFinancialNumber, "ElementOrganizationFinancialNumber");
