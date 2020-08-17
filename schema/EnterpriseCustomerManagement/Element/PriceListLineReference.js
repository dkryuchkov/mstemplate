var Modeler = require("../Modeler.js");
var className = 'ElementPriceListLineReference';

var ElementPriceListLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PriceListLineReference: {
      type: "TypePriceListLineReferenceType",
      wsdlDefinition: {
        name: "PriceListLineReference",
        type: "PriceListLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price List Line. Each price list line stores the list price of a specific item or service"
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
	  PriceListLineReference: {
      type: "TypePriceListLineReferenceType",
      wsdlDefinition: {
        name: "PriceListLineReference",
        type: "PriceListLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price List Line. Each price list line stores the list price of a specific item or service"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPriceListLineReference;
Modeler.register(ElementPriceListLineReference, "ElementPriceListLineReference");
