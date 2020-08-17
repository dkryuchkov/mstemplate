var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyLineOfCredit';

var ElementCustomerPartyLineOfCredit = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyLineOfCredit: {
      type: "TypeCustomerPartyLineOfCreditType",
      wsdlDefinition: {
        name: "CustomerPartyLineOfCredit",
        type: "CustomerPartyLineOfCreditType",
        "xsd:annotation": {
          "xsd:documentation": "The credit allowed to the customer",
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
	  CustomerPartyLineOfCredit: {
      type: "TypeCustomerPartyLineOfCreditType",
      wsdlDefinition: {
        name: "CustomerPartyLineOfCredit",
        type: "CustomerPartyLineOfCreditType",
        "xsd:annotation": {
          "xsd:documentation": "The credit allowed to the customer",
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

module.exports = ElementCustomerPartyLineOfCredit;
Modeler.register(ElementCustomerPartyLineOfCredit, "ElementCustomerPartyLineOfCredit");
