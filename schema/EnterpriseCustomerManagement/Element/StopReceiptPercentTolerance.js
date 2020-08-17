var Modeler = require("../Modeler.js");
var className = 'ElementStopReceiptPercentTolerance';

var ElementStopReceiptPercentTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StopReceiptPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "StopReceiptPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage tolerance of the ordered quantity within which a shipment is automatically closed for receiving"
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
	  StopReceiptPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "StopReceiptPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage tolerance of the ordered quantity within which a shipment is automatically closed for receiving"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementStopReceiptPercentTolerance;
Modeler.register(ElementStopReceiptPercentTolerance, "ElementStopReceiptPercentTolerance");
