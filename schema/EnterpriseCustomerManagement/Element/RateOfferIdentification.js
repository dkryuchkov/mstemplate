var Modeler = require("../Modeler.js");
var className = 'ElementRateOfferIdentification';

var ElementRateOfferIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RateOfferIdentification: {
      type: "TypeRateOfferIdentificationType",
      wsdlDefinition: {
        name: "RateOfferIdentification",
        type: "RateOfferIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of contractual information for a particular rate offering."
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
	  RateOfferIdentification: {
      type: "TypeRateOfferIdentificationType",
      wsdlDefinition: {
        name: "RateOfferIdentification",
        type: "RateOfferIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of contractual information for a particular rate offering."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRateOfferIdentification;
Modeler.register(ElementRateOfferIdentification, "ElementRateOfferIdentification");
