var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaymentReferenceType';

var TypeCustomPaymentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaymentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentReferenceType",
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
	  CustomPaymentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaymentReferenceType;
Modeler.register(TypeCustomPaymentReferenceType, "TypeCustomPaymentReferenceType");
