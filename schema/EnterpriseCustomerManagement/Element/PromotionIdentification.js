var Modeler = require("../Modeler.js");
var className = 'ElementPromotionIdentification';

var ElementPromotionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PromotionIdentification: {
      type: "TypePromotionIdentificationType",
      wsdlDefinition: {
        name: "PromotionIdentification",
        type: "PromotionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Promotion"
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
	  PromotionIdentification: {
      type: "TypePromotionIdentificationType",
      wsdlDefinition: {
        name: "PromotionIdentification",
        type: "PromotionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Promotion"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPromotionIdentification;
Modeler.register(ElementPromotionIdentification, "ElementPromotionIdentification");
