var Modeler = require("../Modeler.js");
var className = 'ElementQuoteAwardStatus';

var ElementQuoteAwardStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuoteAwardStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "QuoteAwardStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Award Status of a Quote"
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
	  QuoteAwardStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "QuoteAwardStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Award Status of a Quote"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQuoteAwardStatus;
Modeler.register(ElementQuoteAwardStatus, "ElementQuoteAwardStatus");
