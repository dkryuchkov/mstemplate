var Modeler = require("../Modeler.js");
var className = 'ElementBillingProfileIdentification';

var ElementBillingProfileIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillingProfileIdentification: {
      type: "TypeBillingProfileIdentificationType",
      wsdlDefinition: {
        name: "BillingProfileIdentification",
        type: "BillingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a BillingProfile"
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
	  BillingProfileIdentification: {
      type: "TypeBillingProfileIdentificationType",
      wsdlDefinition: {
        name: "BillingProfileIdentification",
        type: "BillingProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a BillingProfile"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillingProfileIdentification;
Modeler.register(ElementBillingProfileIdentification, "ElementBillingProfileIdentification");
