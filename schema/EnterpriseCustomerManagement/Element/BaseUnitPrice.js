var Modeler = require("../Modeler.js");
var className = 'ElementBaseUnitPrice';

var ElementBaseUnitPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BaseUnitPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "BaseUnitPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The unit price of a line item expressed in base currency"
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
	  BaseUnitPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "BaseUnitPrice",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The unit price of a line item expressed in base currency"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBaseUnitPrice;
Modeler.register(ElementBaseUnitPrice, "ElementBaseUnitPrice");
