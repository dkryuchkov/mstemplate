var Modeler = require("../Modeler.js");
var className = 'ElementInvoicingRuleIdentification';

var ElementInvoicingRuleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvoicingRuleIdentification: {
      type: "TypeInvoicingRuleIdentificationType",
      wsdlDefinition: {
        name: "InvoicingRuleIdentification",
        type: "InvoicingRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Invoicing Rule"
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
	  InvoicingRuleIdentification: {
      type: "TypeInvoicingRuleIdentificationType",
      wsdlDefinition: {
        name: "InvoicingRuleIdentification",
        type: "InvoicingRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Invoicing Rule"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInvoicingRuleIdentification;
Modeler.register(ElementInvoicingRuleIdentification, "ElementInvoicingRuleIdentification");
