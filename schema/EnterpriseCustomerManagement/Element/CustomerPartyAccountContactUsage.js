var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountContactUsage';

var ElementCustomerPartyAccountContactUsage = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountContactUsage: {
      type: "TypeCustomerPartyAccountContactUsageType",
      wsdlDefinition: {
        name: "CustomerPartyAccountContactUsage",
        type: "CustomerPartyAccountContactUsageType",
        "xsd:annotation": {
          "xsd:documentation": "Roles that this CustomerContact can play with relation to this Customer."
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
	  CustomerPartyAccountContactUsage: {
      type: "TypeCustomerPartyAccountContactUsageType",
      wsdlDefinition: {
        name: "CustomerPartyAccountContactUsage",
        type: "CustomerPartyAccountContactUsageType",
        "xsd:annotation": {
          "xsd:documentation": "Roles that this CustomerContact can play with relation to this Customer."
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountContactUsage;
Modeler.register(ElementCustomerPartyAccountContactUsage, "ElementCustomerPartyAccountContactUsage");
