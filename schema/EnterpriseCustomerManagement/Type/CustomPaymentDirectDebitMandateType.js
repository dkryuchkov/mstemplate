var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaymentDirectDebitMandateType';

var TypeCustomPaymentDirectDebitMandateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaymentDirectDebitMandateType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentDirectDebitMandateType",
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
	  CustomPaymentDirectDebitMandateType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentDirectDebitMandateType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaymentDirectDebitMandateType;
Modeler.register(TypeCustomPaymentDirectDebitMandateType, "TypeCustomPaymentDirectDebitMandateType");
