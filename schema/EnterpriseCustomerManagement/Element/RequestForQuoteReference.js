var Modeler = require("../Modeler.js");
var className = 'ElementRequestForQuoteReference';

var ElementRequestForQuoteReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestForQuoteReference: {
      type: "TypeRequestForQuoteReferenceType",
      wsdlDefinition: {
        name: "RequestForQuoteReference",
        type: "RequestForQuoteReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Request For Quote"
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
	  RequestForQuoteReference: {
      type: "TypeRequestForQuoteReferenceType",
      wsdlDefinition: {
        name: "RequestForQuoteReference",
        type: "RequestForQuoteReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Request For Quote"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequestForQuoteReference;
Modeler.register(ElementRequestForQuoteReference, "ElementRequestForQuoteReference");
