var Modeler = require("../Modeler.js");
var className = 'ElementQuoteLineIdentification';

var ElementQuoteLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuoteLineIdentification: {
      type: "TypeQuoteLineIdentificationType",
      wsdlDefinition: {
        name: "QuoteLineIdentification",
        type: "QuoteLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a quote line"
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
	  QuoteLineIdentification: {
      type: "TypeQuoteLineIdentificationType",
      wsdlDefinition: {
        name: "QuoteLineIdentification",
        type: "QuoteLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a quote line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQuoteLineIdentification;
Modeler.register(ElementQuoteLineIdentification, "ElementQuoteLineIdentification");
