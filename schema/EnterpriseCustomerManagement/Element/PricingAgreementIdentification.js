var Modeler = require("../Modeler.js");
var className = 'ElementPricingAgreementIdentification';

var ElementPricingAgreementIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PricingAgreementIdentification: {
      type: "TypePricingAgreementIdentificationType",
      wsdlDefinition: {
        name: "PricingAgreementIdentification",
        type: "PricingAgreementIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Pricing Agreement"
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
	  PricingAgreementIdentification: {
      type: "TypePricingAgreementIdentificationType",
      wsdlDefinition: {
        name: "PricingAgreementIdentification",
        type: "PricingAgreementIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Pricing Agreement"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPricingAgreementIdentification;
Modeler.register(ElementPricingAgreementIdentification, "ElementPricingAgreementIdentification");
