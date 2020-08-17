var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyFinancialServiceProfile';

var ElementCustomerPartyFinancialServiceProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyFinancialServiceProfile: {
      type: "TypeCustomerPartyFinancialServiceProfileType",
      wsdlDefinition: {
        name: "CustomerPartyFinancialServiceProfile",
        type: "CustomerPartyFinancialServiceProfileType",
        "xsd:annotation": {
          "xsd:documentation": "The profile of the customer's financial service interaction details the defaults and characteristics of their relationship with the institution.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N1",
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
	  CustomerPartyFinancialServiceProfile: {
      type: "TypeCustomerPartyFinancialServiceProfileType",
      wsdlDefinition: {
        name: "CustomerPartyFinancialServiceProfile",
        type: "CustomerPartyFinancialServiceProfileType",
        "xsd:annotation": {
          "xsd:documentation": "The profile of the customer's financial service interaction details the defaults and characteristics of their relationship with the institution.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyFinancialServiceProfile;
Modeler.register(ElementCustomerPartyFinancialServiceProfile, "ElementCustomerPartyFinancialServiceProfile");
