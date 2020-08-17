var Modeler = require("../Modeler.js");
var className = 'ElementQuotePriceQualificationIdentification';

var ElementQuotePriceQualificationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuotePriceQualificationIdentification: {
      type: "TypeQuotePriceQualificationIdentificationType",
      wsdlDefinition: {
        name: "QuotePriceQualificationIdentification",
        type: "QuotePriceQualificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a quote line price qualification"
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
	  QuotePriceQualificationIdentification: {
      type: "TypeQuotePriceQualificationIdentificationType",
      wsdlDefinition: {
        name: "QuotePriceQualificationIdentification",
        type: "QuotePriceQualificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a quote line price qualification"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQuotePriceQualificationIdentification;
Modeler.register(ElementQuotePriceQualificationIdentification, "ElementQuotePriceQualificationIdentification");
