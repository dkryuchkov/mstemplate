var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaymentReceiptReferenceType';

var TypeCustomPaymentReceiptReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaymentReceiptReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentReceiptReferenceType",
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
	  CustomPaymentReceiptReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentReceiptReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaymentReceiptReferenceType;
Modeler.register(TypeCustomPaymentReceiptReferenceType, "TypeCustomPaymentReceiptReferenceType");
