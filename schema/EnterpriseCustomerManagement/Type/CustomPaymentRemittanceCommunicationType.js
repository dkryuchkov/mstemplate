var Modeler = require("../Modeler.js");
var className = 'TypeCustomPaymentRemittanceCommunicationType';

var TypeCustomPaymentRemittanceCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPaymentRemittanceCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentRemittanceCommunicationType",
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
	  CustomPaymentRemittanceCommunicationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPaymentRemittanceCommunicationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPaymentRemittanceCommunicationType;
Modeler.register(TypeCustomPaymentRemittanceCommunicationType, "TypeCustomPaymentRemittanceCommunicationType");
