var Modeler = require("../Modeler.js");
var className = 'ElementDebitChargeAuthorizationResponse';

var ElementDebitChargeAuthorizationResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DebitChargeAuthorizationResponse: {
      type: "TypeDebitChargeAuthorizationResponseType",
      wsdlDefinition: {
        name: "DebitChargeAuthorizationResponse",
        type: "DebitChargeAuthorizationResponseType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the authorization Response for an amount to be charged to a debit card."
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
	  DebitChargeAuthorizationResponse: {
      type: "TypeDebitChargeAuthorizationResponseType",
      wsdlDefinition: {
        name: "DebitChargeAuthorizationResponse",
        type: "DebitChargeAuthorizationResponseType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the authorization Response for an amount to be charged to a debit card."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDebitChargeAuthorizationResponse;
Modeler.register(ElementDebitChargeAuthorizationResponse, "ElementDebitChargeAuthorizationResponse");
