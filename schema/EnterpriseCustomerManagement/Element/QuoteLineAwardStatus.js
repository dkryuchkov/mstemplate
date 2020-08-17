var Modeler = require("../Modeler.js");
var className = 'ElementQuoteLineAwardStatus';

var ElementQuoteLineAwardStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuoteLineAwardStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "QuoteLineAwardStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Award Status of a Quote line"
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
	  QuoteLineAwardStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "QuoteLineAwardStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Award Status of a Quote line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQuoteLineAwardStatus;
Modeler.register(ElementQuoteLineAwardStatus, "ElementQuoteLineAwardStatus");
