var Modeler = require("../Modeler.js");
var className = 'ElementQuoteLineReference';

var ElementQuoteLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuoteLineReference: {
      type: "TypeQuoteLineReferenceType",
      wsdlDefinition: {
        name: "QuoteLineReference",
        type: "QuoteLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a specific line within a quote"
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
	  QuoteLineReference: {
      type: "TypeQuoteLineReferenceType",
      wsdlDefinition: {
        name: "QuoteLineReference",
        type: "QuoteLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a specific line within a quote"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQuoteLineReference;
Modeler.register(ElementQuoteLineReference, "ElementQuoteLineReference");
