var Modeler = require("../Modeler.js");
var className = 'TypeDebitCardPaymentType';

var TypeDebitCardPaymentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DebitChargeAuthorization: {
      type: "TypeDebitChargeAuthorizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DebitChargeAuthorization",
        type: "DebitChargeAuthorizationType",
        "xsd:annotation": {
          "xsd:documentation": "Debit Card Payment and authorization Details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DebitChargeAuthorizationResponse: {
      type: "TypeDebitChargeAuthorizationResponseType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DebitChargeAuthorizationResponse",
        type: "DebitChargeAuthorizationResponseType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the authorization Response for an amount to be charged to a debit card"
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
	  DebitChargeAuthorization: {
      type: "TypeDebitChargeAuthorizationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DebitChargeAuthorization",
        type: "DebitChargeAuthorizationType",
        "xsd:annotation": {
          "xsd:documentation": "Debit Card Payment and authorization Details"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DebitChargeAuthorizationResponse: {
      type: "TypeDebitChargeAuthorizationResponseType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DebitChargeAuthorizationResponse",
        type: "DebitChargeAuthorizationResponseType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the authorization Response for an amount to be charged to a debit card"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDebitCardPaymentType;
Modeler.register(TypeDebitCardPaymentType, "TypeDebitCardPaymentType");
