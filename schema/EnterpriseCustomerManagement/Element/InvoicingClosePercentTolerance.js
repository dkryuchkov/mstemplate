var Modeler = require("../Modeler.js");
var className = 'ElementInvoicingClosePercentTolerance';

var ElementInvoicingClosePercentTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InvoicingClosePercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "InvoicingClosePercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage tolerance within which a shipment is automatically closed for invoicing when billed"
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
	  InvoicingClosePercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "InvoicingClosePercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage tolerance within which a shipment is automatically closed for invoicing when billed"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInvoicingClosePercentTolerance;
Modeler.register(ElementInvoicingClosePercentTolerance, "ElementInvoicingClosePercentTolerance");
