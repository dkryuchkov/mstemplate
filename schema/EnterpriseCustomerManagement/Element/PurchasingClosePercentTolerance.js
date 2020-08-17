var Modeler = require("../Modeler.js");
var className = 'ElementPurchasingClosePercentTolerance';

var ElementPurchasingClosePercentTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchasingClosePercentTolerance: {
      type: "TypePurchasingClosePercentToleranceType",
      wsdlDefinition: {
        name: "PurchasingClosePercentTolerance",
        type: "PurchasingClosePercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Receipt percentage tolerance within which purchasing automatically close purchase order shipments."
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
	  PurchasingClosePercentTolerance: {
      type: "TypePurchasingClosePercentToleranceType",
      wsdlDefinition: {
        name: "PurchasingClosePercentTolerance",
        type: "PurchasingClosePercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Receipt percentage tolerance within which purchasing automatically close purchase order shipments."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchasingClosePercentTolerance;
Modeler.register(ElementPurchasingClosePercentTolerance, "ElementPurchasingClosePercentTolerance");
