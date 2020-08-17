var Modeler = require("../Modeler.js");
var className = 'TypeCustomSuggestedBuyerPartyReferenceType';

var TypeCustomSuggestedBuyerPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSuggestedBuyerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSuggestedBuyerPartyReferenceType",
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
	  CustomSuggestedBuyerPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSuggestedBuyerPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSuggestedBuyerPartyReferenceType;
Modeler.register(TypeCustomSuggestedBuyerPartyReferenceType, "TypeCustomSuggestedBuyerPartyReferenceType");
