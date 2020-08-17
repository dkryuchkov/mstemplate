var Modeler = require("../Modeler.js");
var className = 'ElementPriceListIdentification';

var ElementPriceListIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PriceListIdentification: {
      type: "TypePriceListIdentificationType",
      wsdlDefinition: {
        name: "PriceListIdentification",
        type: "PriceListIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Price List"
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
	  PriceListIdentification: {
      type: "TypePriceListIdentificationType",
      wsdlDefinition: {
        name: "PriceListIdentification",
        type: "PriceListIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Price List"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPriceListIdentification;
Modeler.register(ElementPriceListIdentification, "ElementPriceListIdentification");
