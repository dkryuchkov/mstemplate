var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaymentProfileReferenceType';

var TypeCustomPaymentProfileReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaymentProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentProfileReferenceType",
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
	  CustomPaymentProfileReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentProfileReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaymentProfileReferenceType;
Modeler.register(TypeCustomPaymentProfileReferenceType, "TypeCustomPaymentProfileReferenceType");
