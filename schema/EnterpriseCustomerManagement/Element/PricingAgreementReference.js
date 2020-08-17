var Modeler = require("../Modeler.js");
var className = 'ElementPricingAgreementReference';

var ElementPricingAgreementReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PricingAgreementReference: {
      type: "TypePricingAgreementReferenceType",
      wsdlDefinition: {
        name: "PricingAgreementReference",
        type: "PricingAgreementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Pricing Agreement. A Pricing Agreement is a document that identifies a price for a set of items in the quote."
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
	  PricingAgreementReference: {
      type: "TypePricingAgreementReferenceType",
      wsdlDefinition: {
        name: "PricingAgreementReference",
        type: "PricingAgreementReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Pricing Agreement. A Pricing Agreement is a document that identifies a price for a set of items in the quote."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPricingAgreementReference;
Modeler.register(ElementPricingAgreementReference, "ElementPricingAgreementReference");
