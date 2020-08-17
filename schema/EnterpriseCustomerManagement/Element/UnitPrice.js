var Modeler = require("../Modeler.js");
var className = 'ElementUnitPrice';

var ElementUnitPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UnitPrice: {
      type: "TypeUnitPriceType",
      wsdlDefinition: {
        name: "UnitPrice",
        type: "UnitPriceType",
        "xsd:annotation": {
          "xsd:documentation": "Unit price of a item or service, expressed per quantity"
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
	  UnitPrice: {
      type: "TypeUnitPriceType",
      wsdlDefinition: {
        name: "UnitPrice",
        type: "UnitPriceType",
        "xsd:annotation": {
          "xsd:documentation": "Unit price of a item or service, expressed per quantity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUnitPrice;
Modeler.register(ElementUnitPrice, "ElementUnitPrice");
