var Modeler = require("../Modeler.js");
var className = 'ElementMarketingOfferTreatmentIdentification';

var ElementMarketingOfferTreatmentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MarketingOfferTreatmentIdentification: {
      type: "TypeMarketingOfferTreatmentIdentificationType",
      wsdlDefinition: {
        name: "MarketingOfferTreatmentIdentification",
        type: "MarketingOfferTreatmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Marketing Treatment used in the a Marketing Offer"
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
	  MarketingOfferTreatmentIdentification: {
      type: "TypeMarketingOfferTreatmentIdentificationType",
      wsdlDefinition: {
        name: "MarketingOfferTreatmentIdentification",
        type: "MarketingOfferTreatmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Marketing Treatment used in the a Marketing Offer"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMarketingOfferTreatmentIdentification;
Modeler.register(ElementMarketingOfferTreatmentIdentification, "ElementMarketingOfferTreatmentIdentification");
