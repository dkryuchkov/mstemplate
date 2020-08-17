var Modeler = require("../Modeler.js");
var className = 'ElementPriceUpdatePercentTolerance';

var ElementPriceUpdatePercentTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PriceUpdatePercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "PriceUpdatePercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage tolerance within which a price is allowed to deviate from a particular price (e.g., via price catalog message such as EDI 832 used in blanket purchase agreement)"
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
	  PriceUpdatePercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "PriceUpdatePercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage tolerance within which a price is allowed to deviate from a particular price (e.g., via price catalog message such as EDI 832 used in blanket purchase agreement)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPriceUpdatePercentTolerance;
Modeler.register(ElementPriceUpdatePercentTolerance, "ElementPriceUpdatePercentTolerance");
