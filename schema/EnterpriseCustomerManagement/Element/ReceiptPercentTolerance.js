var Modeler = require("../Modeler.js");
var className = 'ElementReceiptPercentTolerance';

var ElementReceiptPercentTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceiptPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "ReceiptPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Receiving Quantity tolerance applicable for an order line"
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
	  ReceiptPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "ReceiptPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Receiving Quantity tolerance applicable for an order line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReceiptPercentTolerance;
Modeler.register(ElementReceiptPercentTolerance, "ElementReceiptPercentTolerance");
