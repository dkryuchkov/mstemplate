var Modeler = require("../Modeler.js");
var className = 'ElementFinancialProfile';

var ElementFinancialProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialProfile: {
      type: "TypeFinancialProfileType",
      wsdlDefinition: {
        name: "FinancialProfile",
        type: "FinancialProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial accounts and account balances of an organization or person"
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
	  FinancialProfile: {
      type: "TypeFinancialProfileType",
      wsdlDefinition: {
        name: "FinancialProfile",
        type: "FinancialProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the financial accounts and account balances of an organization or person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialProfile;
Modeler.register(ElementFinancialProfile, "ElementFinancialProfile");
