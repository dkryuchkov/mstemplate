var Modeler = require("../Modeler.js");
var className = 'ElementFinancialAccountSigningAuthority';

var ElementFinancialAccountSigningAuthority = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialAccountSigningAuthority: {
      type: "TypeFinancialAccountSigningAuthorityType",
      wsdlDefinition: {
        name: "FinancialAccountSigningAuthority",
        type: "FinancialAccountSigningAuthorityType",
        "xsd:annotation": {
          "xsd:documentation": "To capture the account signatory details of an account holder",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
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
	  FinancialAccountSigningAuthority: {
      type: "TypeFinancialAccountSigningAuthorityType",
      wsdlDefinition: {
        name: "FinancialAccountSigningAuthority",
        type: "FinancialAccountSigningAuthorityType",
        "xsd:annotation": {
          "xsd:documentation": "To capture the account signatory details of an account holder",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialAccountSigningAuthority;
Modeler.register(ElementFinancialAccountSigningAuthority, "ElementFinancialAccountSigningAuthority");
