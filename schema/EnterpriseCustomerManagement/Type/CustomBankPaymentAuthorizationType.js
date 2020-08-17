var Modeler = require("../Modeler.js");
var className = 'TypeCustomBankPaymentAuthorizationType';

var TypeCustomBankPaymentAuthorizationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBankPaymentAuthorizationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankPaymentAuthorizationType",
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
	  CustomBankPaymentAuthorizationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankPaymentAuthorizationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBankPaymentAuthorizationType;
Modeler.register(TypeCustomBankPaymentAuthorizationType, "TypeCustomBankPaymentAuthorizationType");
