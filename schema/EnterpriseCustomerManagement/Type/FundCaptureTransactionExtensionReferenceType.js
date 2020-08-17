var Modeler = require("../Modeler.js");
var className = 'TypeFundCaptureTransactionExtensionReferenceType';

var TypeFundCaptureTransactionExtensionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FundCaptureTransactionExtensionIdentification: {
      type: "TypeFundCaptureTransactionExtensionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FundCaptureTransactionExtensionIdentification",
        type: "FundCaptureTransactionExtensionIdentificationType",
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
	  FundCaptureTransactionExtensionIdentification: {
      type: "TypeFundCaptureTransactionExtensionIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FundCaptureTransactionExtensionIdentification",
        type: "FundCaptureTransactionExtensionIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFundCaptureTransactionExtensionReferenceType;
Modeler.register(TypeFundCaptureTransactionExtensionReferenceType, "TypeFundCaptureTransactionExtensionReferenceType");
