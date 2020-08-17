var Modeler = require("../Modeler.js");
var className = 'ElementFinancialAccountOrganizationHolder';

var ElementFinancialAccountOrganizationHolder = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialAccountOrganizationHolder: {
      type: "TypeFinancialAccountOrganizationHolderType",
      wsdlDefinition: {
        name: "FinancialAccountOrganizationHolder",
        type: "FinancialAccountOrganizationHolderType",
        "xsd:annotation": {
          "xsd:documentation": "An organization financial account holder"
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
	  FinancialAccountOrganizationHolder: {
      type: "TypeFinancialAccountOrganizationHolderType",
      wsdlDefinition: {
        name: "FinancialAccountOrganizationHolder",
        type: "FinancialAccountOrganizationHolderType",
        "xsd:annotation": {
          "xsd:documentation": "An organization financial account holder"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialAccountOrganizationHolder;
Modeler.register(ElementFinancialAccountOrganizationHolder, "ElementFinancialAccountOrganizationHolder");
