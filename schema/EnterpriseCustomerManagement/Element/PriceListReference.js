var Modeler = require("../Modeler.js");
var className = 'ElementPriceListReference';

var ElementPriceListReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PriceListReference: {
      type: "TypePriceListReferenceType",
      wsdlDefinition: {
        name: "PriceListReference",
        type: "PriceListReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price List. A Price List is intended to capture list price(s) of an item or service. The price list header stores information about the price list, such as price list name, base currency, and so forth. The price list header can have multiple price list lines. Each price list line stores the list price of a specific item or service"
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
	  PriceListReference: {
      type: "TypePriceListReferenceType",
      wsdlDefinition: {
        name: "PriceListReference",
        type: "PriceListReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price List. A Price List is intended to capture list price(s) of an item or service. The price list header stores information about the price list, such as price list name, base currency, and so forth. The price list header can have multiple price list lines. Each price list line stores the list price of a specific item or service"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPriceListReference;
Modeler.register(ElementPriceListReference, "ElementPriceListReference");
