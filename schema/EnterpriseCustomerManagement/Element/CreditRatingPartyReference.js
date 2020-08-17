var Modeler = require("../Modeler.js");
var className = 'ElementCreditRatingPartyReference';

var ElementCreditRatingPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditRatingPartyReference: {
      type: "TypeCreditRatingPartyReferenceType",
      wsdlDefinition: {
        name: "CreditRatingPartyReference",
        type: "CreditRatingPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party that evaluates and provides credit rating services"
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
	  CreditRatingPartyReference: {
      type: "TypeCreditRatingPartyReferenceType",
      wsdlDefinition: {
        name: "CreditRatingPartyReference",
        type: "CreditRatingPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party that evaluates and provides credit rating services"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreditRatingPartyReference;
Modeler.register(ElementCreditRatingPartyReference, "ElementCreditRatingPartyReference");
