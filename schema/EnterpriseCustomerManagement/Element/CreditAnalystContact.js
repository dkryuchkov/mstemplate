var Modeler = require("../Modeler.js");
var className = 'ElementCreditAnalystContact';

var ElementCreditAnalystContact = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditAnalystContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "CreditAnalystContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "A person or department that performs the function of a Credit Analyst"
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
	  CreditAnalystContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "CreditAnalystContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "A person or department that performs the function of a Credit Analyst"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreditAnalystContact;
Modeler.register(ElementCreditAnalystContact, "ElementCreditAnalystContact");
