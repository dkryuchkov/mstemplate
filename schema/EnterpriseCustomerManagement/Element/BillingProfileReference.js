var Modeler = require("../Modeler.js");
var className = 'ElementBillingProfileReference';

var ElementBillingProfileReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillingProfileReference: {
      type: "TypeBillingProfileReferenceType",
      wsdlDefinition: {
        name: "BillingProfileReference",
        type: "BillingProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a billing profile, typically associated with a customer record. A Billing Profile identifies how a customer is to be billed for their orders"
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
	  BillingProfileReference: {
      type: "TypeBillingProfileReferenceType",
      wsdlDefinition: {
        name: "BillingProfileReference",
        type: "BillingProfileReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a billing profile, typically associated with a customer record. A Billing Profile identifies how a customer is to be billed for their orders"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillingProfileReference;
Modeler.register(ElementBillingProfileReference, "ElementBillingProfileReference");
