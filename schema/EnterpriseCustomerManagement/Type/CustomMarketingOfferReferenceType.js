var Modeler = require("../Modeler.js");
var className = 'TypeCustomMarketingOfferReferenceType';

var TypeCustomMarketingOfferReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomMarketingOfferReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingOfferReferenceType",
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
	  CustomMarketingOfferReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingOfferReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomMarketingOfferReferenceType;
Modeler.register(TypeCustomMarketingOfferReferenceType, "TypeCustomMarketingOfferReferenceType");
