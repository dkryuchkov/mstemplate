var Modeler = require("../Modeler.js");
var className = 'ElementOriginalRoundRequestForQuoteReference';

var ElementOriginalRoundRequestForQuoteReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalRoundRequestForQuoteReference: {
      type: "TypeRequestForQuoteReferenceType",
      wsdlDefinition: {
        name: "OriginalRoundRequestForQuoteReference",
        type: "RequestForQuoteReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the first round Request For Quote document in a multi-round request scenario"
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
	  OriginalRoundRequestForQuoteReference: {
      type: "TypeRequestForQuoteReferenceType",
      wsdlDefinition: {
        name: "OriginalRoundRequestForQuoteReference",
        type: "RequestForQuoteReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the first round Request For Quote document in a multi-round request scenario"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalRoundRequestForQuoteReference;
Modeler.register(ElementOriginalRoundRequestForQuoteReference, "ElementOriginalRoundRequestForQuoteReference");
