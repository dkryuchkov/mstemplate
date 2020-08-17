var Modeler = require("../Modeler.js");
var className = 'TypePromotionReferenceType';

var TypePromotionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PromotionIdentification: {
      type: "TypePromotionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PromotionIdentification",
        type: "PromotionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPromotionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPromotionReferenceType",
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
	  PromotionIdentification: {
      type: "TypePromotionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PromotionIdentification",
        type: "PromotionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPromotionReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPromotionReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePromotionReferenceType;
Modeler.register(TypePromotionReferenceType, "TypePromotionReferenceType");
