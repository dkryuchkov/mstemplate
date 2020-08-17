var Modeler = require("../Modeler.js");
var className = 'ElementFundCaptureTransactionExtensionReference';

var ElementFundCaptureTransactionExtensionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FundCaptureTransactionExtensionReference: {
      type: "TypeFundCaptureTransactionExtensionReferenceType",
      wsdlDefinition: {
        name: "FundCaptureTransactionExtensionReference",
        type: "FundCaptureTransactionExtensionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a FundCaptureTransactionExtension. FundCaptureTransactionExtension is an object in the Payment System which keeps information about a payment transaction made from another application. This information is later used to do an authorization and subsequent settlement. It has a 1-n relationship with the FundCaptureTransaction entity which contains details about the actual authorization or settle transaction (among others). FundCaptureTransactionExtension allows for other applications to interact with the Payment system without exchanging details of the payment instrument involved in the payment."
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
	  FundCaptureTransactionExtensionReference: {
      type: "TypeFundCaptureTransactionExtensionReferenceType",
      wsdlDefinition: {
        name: "FundCaptureTransactionExtensionReference",
        type: "FundCaptureTransactionExtensionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a FundCaptureTransactionExtension. FundCaptureTransactionExtension is an object in the Payment System which keeps information about a payment transaction made from another application. This information is later used to do an authorization and subsequent settlement. It has a 1-n relationship with the FundCaptureTransaction entity which contains details about the actual authorization or settle transaction (among others). FundCaptureTransactionExtension allows for other applications to interact with the Payment system without exchanging details of the payment instrument involved in the payment."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFundCaptureTransactionExtensionReference;
Modeler.register(ElementFundCaptureTransactionExtensionReference, "ElementFundCaptureTransactionExtensionReference");
