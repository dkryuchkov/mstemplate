var Modeler = require("../Modeler.js");
var className = 'ElementMSRP';

var ElementMSRP = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MSRP: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "MSRP",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The Manufacturer's Suggested Retail Price for an item"
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
	  MSRP: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "MSRP",
        type: "PriceType",
        "xsd:annotation": {
          "xsd:documentation": "The Manufacturer's Suggested Retail Price for an item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMSRP;
Modeler.register(ElementMSRP, "ElementMSRP");
