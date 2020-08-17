var Modeler = require("../Modeler.js");
var className = 'ElementRequestForQuoteLineReference';

var ElementRequestForQuoteLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestForQuoteLineReference: {
      type: "TypeRequestForQuoteLineReferenceType",
      wsdlDefinition: {
        name: "RequestForQuoteLineReference",
        type: "RequestForQuoteLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line on a Request For Quote"
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
	  RequestForQuoteLineReference: {
      type: "TypeRequestForQuoteLineReferenceType",
      wsdlDefinition: {
        name: "RequestForQuoteLineReference",
        type: "RequestForQuoteLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line on a Request For Quote"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequestForQuoteLineReference;
Modeler.register(ElementRequestForQuoteLineReference, "ElementRequestForQuoteLineReference");
