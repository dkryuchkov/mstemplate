var Modeler = require("../Modeler.js");
var className = 'ElementQuoteIdentification';

var ElementQuoteIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuoteIdentification: {
      type: "TypeQuoteIdentificationType",
      wsdlDefinition: {
        name: "QuoteIdentification",
        type: "QuoteIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a quote"
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
	  QuoteIdentification: {
      type: "TypeQuoteIdentificationType",
      wsdlDefinition: {
        name: "QuoteIdentification",
        type: "QuoteIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a quote"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQuoteIdentification;
Modeler.register(ElementQuoteIdentification, "ElementQuoteIdentification");
