var Modeler = require("../Modeler.js");
var className = 'ElementFundCaptureTransactionExtensionIdentification';

var ElementFundCaptureTransactionExtensionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FundCaptureTransactionExtensionIdentification: {
      type: "TypeFundCaptureTransactionExtensionIdentificationType",
      wsdlDefinition: {
        name: "FundCaptureTransactionExtensionIdentification",
        type: "FundCaptureTransactionExtensionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a FundCaptureTransactionExtension"
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
	  FundCaptureTransactionExtensionIdentification: {
      type: "TypeFundCaptureTransactionExtensionIdentificationType",
      wsdlDefinition: {
        name: "FundCaptureTransactionExtensionIdentification",
        type: "FundCaptureTransactionExtensionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a FundCaptureTransactionExtension"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFundCaptureTransactionExtensionIdentification;
Modeler.register(ElementFundCaptureTransactionExtensionIdentification, "ElementFundCaptureTransactionExtensionIdentification");
