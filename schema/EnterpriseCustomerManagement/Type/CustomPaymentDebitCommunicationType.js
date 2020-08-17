var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaymentDebitCommunicationType';

var TypeCustomPaymentDebitCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaymentDebitCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentDebitCommunicationType",
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
	  CustomPaymentDebitCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentDebitCommunicationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaymentDebitCommunicationType;
Modeler.register(TypeCustomPaymentDebitCommunicationType, "TypeCustomPaymentDebitCommunicationType");
