var Modeler = require("../Modeler.js");
var className = 'ElementCreditChargeAuthorizationResponse';

var ElementCreditChargeAuthorizationResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditChargeAuthorizationResponse: {
      type: "TypeCreditChargeAuthorizationResponseType",
      wsdlDefinition: {
        name: "CreditChargeAuthorizationResponse",
        type: "CreditChargeAuthorizationResponseType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the authorization Response for an amount to be charged to a credit card."
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
	  CreditChargeAuthorizationResponse: {
      type: "TypeCreditChargeAuthorizationResponseType",
      wsdlDefinition: {
        name: "CreditChargeAuthorizationResponse",
        type: "CreditChargeAuthorizationResponseType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the authorization Response for an amount to be charged to a credit card."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreditChargeAuthorizationResponse;
Modeler.register(ElementCreditChargeAuthorizationResponse, "ElementCreditChargeAuthorizationResponse");
