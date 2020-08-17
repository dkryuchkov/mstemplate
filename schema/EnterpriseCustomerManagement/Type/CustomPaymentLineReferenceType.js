var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaymentLineReferenceType';

var TypeCustomPaymentLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaymentLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentLineReferenceType",
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
	  CustomPaymentLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaymentLineReferenceType;
Modeler.register(TypeCustomPaymentLineReferenceType, "TypeCustomPaymentLineReferenceType");
