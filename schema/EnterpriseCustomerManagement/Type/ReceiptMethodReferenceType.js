var Modeler = require("../Modeler.js");
var className = 'TypeReceiptMethodReferenceType';

var TypeReceiptMethodReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceiptMethodIdentification: {
      type: "TypeReceiptMethodIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReceiptMethodIdentification",
        type: "ReceiptMethodIdentificationType",
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
	  ReceiptMethodIdentification: {
      type: "TypeReceiptMethodIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReceiptMethodIdentification",
        type: "ReceiptMethodIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeReceiptMethodReferenceType;
Modeler.register(TypeReceiptMethodReferenceType, "TypeReceiptMethodReferenceType");
