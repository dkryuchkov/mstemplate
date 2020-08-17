var Modeler = require("../Modeler.js");
var className = 'ElementQuoteReference';

var ElementQuoteReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuoteReference: {
      type: "TypeQuoteReferenceType",
      wsdlDefinition: {
        name: "QuoteReference",
        type: "QuoteReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Quote. A quote is a document that is the supplier's response to a negotiation document. It contains requested information about supplier capabilities and/or pricing for goods and services that the buyer is looking to procure. Examples are a supplier's quote in response to an RFQ, supplier bid on an auction."
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
	  QuoteReference: {
      type: "TypeQuoteReferenceType",
      wsdlDefinition: {
        name: "QuoteReference",
        type: "QuoteReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Quote. A quote is a document that is the supplier's response to a negotiation document. It contains requested information about supplier capabilities and/or pricing for goods and services that the buyer is looking to procure. Examples are a supplier's quote in response to an RFQ, supplier bid on an auction."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQuoteReference;
Modeler.register(ElementQuoteReference, "ElementQuoteReference");
