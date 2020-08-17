var Modeler = require("../Modeler.js");
var className = 'ElementPromotionReference';

var ElementPromotionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PromotionReference: {
      type: "TypePromotionReferenceType",
      wsdlDefinition: {
        name: "PromotionReference",
        type: "PromotionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Promotion."
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
	  PromotionReference: {
      type: "TypePromotionReferenceType",
      wsdlDefinition: {
        name: "PromotionReference",
        type: "PromotionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Promotion."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPromotionReference;
Modeler.register(ElementPromotionReference, "ElementPromotionReference");
