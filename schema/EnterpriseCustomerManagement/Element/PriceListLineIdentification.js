var Modeler = require("../Modeler.js");
var className = 'ElementPriceListLineIdentification';

var ElementPriceListLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PriceListLineIdentification: {
      type: "TypePriceListLineIdentificationType",
      wsdlDefinition: {
        name: "PriceListLineIdentification",
        type: "PriceListLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Price List Line"
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
	  PriceListLineIdentification: {
      type: "TypePriceListLineIdentificationType",
      wsdlDefinition: {
        name: "PriceListLineIdentification",
        type: "PriceListLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Price List Line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPriceListLineIdentification;
Modeler.register(ElementPriceListLineIdentification, "ElementPriceListLineIdentification");
