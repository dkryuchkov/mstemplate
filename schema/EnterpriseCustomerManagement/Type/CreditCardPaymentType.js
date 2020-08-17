var Modeler = require("../Modeler.js");
var className = 'TypeCreditCardPaymentType';

var TypeCreditCardPaymentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditChargeAuthorization: {
      type: "TypeCreditChargeAuthorizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditChargeAuthorization",
        type: "CreditChargeAuthorizationType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Card Payment and authorization Details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditChargeAuthorizationResponse: {
      type: "TypeCreditChargeAuthorizationResponseType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditChargeAuthorizationResponse",
        type: "CreditChargeAuthorizationResponseType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the authorization Response for an amount to be charged to a credit card"
        },
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
	  CreditChargeAuthorization: {
      type: "TypeCreditChargeAuthorizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditChargeAuthorization",
        type: "CreditChargeAuthorizationType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Card Payment and authorization Details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreditChargeAuthorizationResponse: {
      type: "TypeCreditChargeAuthorizationResponseType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreditChargeAuthorizationResponse",
        type: "CreditChargeAuthorizationResponseType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the authorization Response for an amount to be charged to a credit card"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCreditCardPaymentType;
Modeler.register(TypeCreditCardPaymentType, "TypeCreditCardPaymentType");
