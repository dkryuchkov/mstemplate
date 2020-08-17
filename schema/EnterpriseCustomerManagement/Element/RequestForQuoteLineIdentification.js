var Modeler = require("../Modeler.js");
var className = 'ElementRequestForQuoteLineIdentification';

var ElementRequestForQuoteLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestForQuoteLineIdentification: {
      type: "TypeRequestForQuoteLineIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteLineIdentification",
        type: "RequestForQuoteLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Request For Quote"
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
	  RequestForQuoteLineIdentification: {
      type: "TypeRequestForQuoteLineIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteLineIdentification",
        type: "RequestForQuoteLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Request For Quote"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequestForQuoteLineIdentification;
Modeler.register(ElementRequestForQuoteLineIdentification, "ElementRequestForQuoteLineIdentification");
