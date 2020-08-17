var Modeler = require("../Modeler.js");
var className = 'ElementMarketingEventIdentification';

var ElementMarketingEventIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MarketingEventIdentification: {
      type: "TypeMarketingEventIdentificationType",
      wsdlDefinition: {
        name: "MarketingEventIdentification",
        type: "MarketingEventIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Marketing Event"
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
	  MarketingEventIdentification: {
      type: "TypeMarketingEventIdentificationType",
      wsdlDefinition: {
        name: "MarketingEventIdentification",
        type: "MarketingEventIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Marketing Event"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMarketingEventIdentification;
Modeler.register(ElementMarketingEventIdentification, "ElementMarketingEventIdentification");
