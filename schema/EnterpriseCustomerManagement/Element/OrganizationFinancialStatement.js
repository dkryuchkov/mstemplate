var Modeler = require("../Modeler.js");
var className = 'ElementOrganizationFinancialStatement';

var ElementOrganizationFinancialStatement = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationFinancialStatement: {
      type: "TypeOrganizationFinancialStatementType",
      wsdlDefinition: {
        name: "OrganizationFinancialStatement",
        type: "OrganizationFinancialStatementType",
        "xsd:annotation": {
          "xsd:documentation": "Financial statements of an organization"
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
	  OrganizationFinancialStatement: {
      type: "TypeOrganizationFinancialStatementType",
      wsdlDefinition: {
        name: "OrganizationFinancialStatement",
        type: "OrganizationFinancialStatementType",
        "xsd:annotation": {
          "xsd:documentation": "Financial statements of an organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganizationFinancialStatement;
Modeler.register(ElementOrganizationFinancialStatement, "ElementOrganizationFinancialStatement");
