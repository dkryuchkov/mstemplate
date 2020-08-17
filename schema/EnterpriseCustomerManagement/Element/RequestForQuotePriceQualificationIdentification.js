var Modeler = require("../Modeler.js");
var className = 'ElementRequestForQuotePriceQualificationIdentification';

var ElementRequestForQuotePriceQualificationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestForQuotePriceQualificationIdentification: {
      type: "TypeRequestForQuotePriceQualificationIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuotePriceQualificationIdentification",
        type: "RequestForQuotePriceQualificationIdentificationType",
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
	  RequestForQuotePriceQualificationIdentification: {
      type: "TypeRequestForQuotePriceQualificationIdentificationType",
      wsdlDefinition: {
        name: "RequestForQuotePriceQualificationIdentification",
        type: "RequestForQuotePriceQualificationIdentificationType",
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

module.exports = ElementRequestForQuotePriceQualificationIdentification;
Modeler.register(ElementRequestForQuotePriceQualificationIdentification, "ElementRequestForQuotePriceQualificationIdentification");
