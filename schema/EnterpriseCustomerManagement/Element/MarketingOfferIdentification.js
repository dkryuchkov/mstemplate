var Modeler = require("../Modeler.js");
var className = 'ElementMarketingOfferIdentification';

var ElementMarketingOfferIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MarketingOfferIdentification: {
      type: "TypeMarketingOfferIdentificationType",
      wsdlDefinition: {
        name: "MarketingOfferIdentification",
        type: "MarketingOfferIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Marketing Offer object"
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
	  MarketingOfferIdentification: {
      type: "TypeMarketingOfferIdentificationType",
      wsdlDefinition: {
        name: "MarketingOfferIdentification",
        type: "MarketingOfferIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Marketing Offer object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMarketingOfferIdentification;
Modeler.register(ElementMarketingOfferIdentification, "ElementMarketingOfferIdentification");
