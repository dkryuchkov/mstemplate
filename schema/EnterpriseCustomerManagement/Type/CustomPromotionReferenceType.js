var Modeler = require("../Modeler.js");
var className = 'TypeCustomPromotionReferenceType';

var TypeCustomPromotionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPromotionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPromotionReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomPromotionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPromotionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPromotionReferenceType;
Modeler.register(TypeCustomPromotionReferenceType, "TypeCustomPromotionReferenceType");
