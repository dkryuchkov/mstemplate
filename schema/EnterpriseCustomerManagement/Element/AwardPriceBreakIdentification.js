var Modeler = require("../Modeler.js");
var className = 'ElementAwardPriceBreakIdentification';

var ElementAwardPriceBreakIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AwardPriceBreakIdentification: {
      type: "TypePriceBreakIdentificationType",
      wsdlDefinition: {
        name: "AwardPriceBreakIdentification",
        type: "PriceBreakIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Stores reference to shipment number in case award price if from Tiers"
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
	  AwardPriceBreakIdentification: {
      type: "TypePriceBreakIdentificationType",
      wsdlDefinition: {
        name: "AwardPriceBreakIdentification",
        type: "PriceBreakIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Stores reference to shipment number in case award price if from Tiers"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAwardPriceBreakIdentification;
Modeler.register(ElementAwardPriceBreakIdentification, "ElementAwardPriceBreakIdentification");
