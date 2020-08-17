var Modeler = require("../Modeler.js");
var className = 'ElementRequestForQuotePriceBreakReference';

var ElementRequestForQuotePriceBreakReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestForQuotePriceBreakReference: {
      type: "TypeRequestForQuotePriceBreakReferenceType",
      wsdlDefinition: {
        name: "RequestForQuotePriceBreakReference",
        type: "RequestForQuotePriceBreakReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price Break Line on a Request For Quote"
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
	  RequestForQuotePriceBreakReference: {
      type: "TypeRequestForQuotePriceBreakReferenceType",
      wsdlDefinition: {
        name: "RequestForQuotePriceBreakReference",
        type: "RequestForQuotePriceBreakReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price Break Line on a Request For Quote"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequestForQuotePriceBreakReference;
Modeler.register(ElementRequestForQuotePriceBreakReference, "ElementRequestForQuotePriceBreakReference");
