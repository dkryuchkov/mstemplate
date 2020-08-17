var Modeler = require("../Modeler.js");
var className = 'TypeCustomCreditRatingPartyReferenceType';

var TypeCustomCreditRatingPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCreditRatingPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditRatingPartyReferenceType",
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
	  CustomCreditRatingPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCreditRatingPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCreditRatingPartyReferenceType;
Modeler.register(TypeCustomCreditRatingPartyReferenceType, "TypeCustomCreditRatingPartyReferenceType");
