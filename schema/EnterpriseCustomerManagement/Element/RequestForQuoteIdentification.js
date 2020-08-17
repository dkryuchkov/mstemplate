var Modeler = require("../Modeler.js");
var className = 'ElementRequestForQuoteIdentification';

var ElementRequestForQuoteIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestForQuoteIdentification: {
      type: "TypeRequestForQuoteIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteIdentification",
        type: "RequestForQuoteIdentificationType",
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
	  RequestForQuoteIdentification: {
      type: "TypeRequestForQuoteIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuoteIdentification",
        type: "RequestForQuoteIdentificationType",
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

module.exports = ElementRequestForQuoteIdentification;
Modeler.register(ElementRequestForQuoteIdentification, "ElementRequestForQuoteIdentification");
