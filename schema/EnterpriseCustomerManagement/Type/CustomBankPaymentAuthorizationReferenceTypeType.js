var Modeler = require("../Modeler.js");
var className = 'TypeCustomBankPaymentAuthorizationReferenceTypeType';

var TypeCustomBankPaymentAuthorizationReferenceTypeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBankPaymentAuthorizationReferenceTypeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankPaymentAuthorizationReferenceTypeType",
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
	  CustomBankPaymentAuthorizationReferenceTypeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankPaymentAuthorizationReferenceTypeType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBankPaymentAuthorizationReferenceTypeType;
Modeler.register(TypeCustomBankPaymentAuthorizationReferenceTypeType, "TypeCustomBankPaymentAuthorizationReferenceTypeType");
