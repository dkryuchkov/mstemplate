var Modeler = require("../Modeler.js");
var className = 'TypeMarketingOfferReferenceType';

var TypeMarketingOfferReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MarketingOfferIdentification: {
      type: "TypeMarketingOfferIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MarketingOfferIdentification",
        type: "MarketingOfferIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomMarketingOfferReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomMarketingOfferReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:MarketingOfferIdentification",
        type: "MarketingOfferIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomMarketingOfferReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomMarketingOfferReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeMarketingOfferReferenceType;
Modeler.register(TypeMarketingOfferReferenceType, "TypeMarketingOfferReferenceType");
