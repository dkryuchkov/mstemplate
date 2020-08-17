var Modeler = require("../Modeler.js");
var className = 'ElementTargetPrice';

var ElementTargetPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TargetPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "TargetPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The Target pricefor an item or service , typically indicated on a Request For Quotation"
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
	  TargetPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "TargetPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The Target pricefor an item or service , typically indicated on a Request For Quotation"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTargetPrice;
Modeler.register(ElementTargetPrice, "ElementTargetPrice");
