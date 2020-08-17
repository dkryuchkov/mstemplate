var Modeler = require("../Modeler.js");
var className = 'ElementBillingInquiryEmailCommunication';

var ElementBillingInquiryEmailCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillingInquiryEmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        name: "BillingInquiryEmailCommunication",
        type: "EmailCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Email address to be used for billing clarifications"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  BillingInquiryEmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        name: "BillingInquiryEmailCommunication",
        type: "EmailCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Email address to be used for billing clarifications"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillingInquiryEmailCommunication;
Modeler.register(ElementBillingInquiryEmailCommunication, "ElementBillingInquiryEmailCommunication");
