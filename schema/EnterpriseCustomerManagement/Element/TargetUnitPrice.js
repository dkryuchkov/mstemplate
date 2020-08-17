var Modeler = require("../Modeler.js");
var className = 'ElementTargetUnitPrice';

var ElementTargetUnitPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TargetUnitPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "TargetUnitPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The Target unit price of an item or service , typically indicated on a Request For Quotation"
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
	  TargetUnitPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "TargetUnitPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The Target unit price of an item or service , typically indicated on a Request For Quotation"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTargetUnitPrice;
Modeler.register(ElementTargetUnitPrice, "ElementTargetUnitPrice");
