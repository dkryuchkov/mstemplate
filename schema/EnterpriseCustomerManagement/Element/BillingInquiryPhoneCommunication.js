var Modeler = require("../Modeler.js");
var className = 'ElementBillingInquiryPhoneCommunication';

var ElementBillingInquiryPhoneCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillingInquiryPhoneCommunication: {
      type: "TypePhoneCommunicationType",
      wsdlDefinition: {
        name: "BillingInquiryPhoneCommunication",
        type: "PhoneCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Phone Number to be used for billing clarifications"
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
	  BillingInquiryPhoneCommunication: {
      type: "TypePhoneCommunicationType",
      wsdlDefinition: {
        name: "BillingInquiryPhoneCommunication",
        type: "PhoneCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Phone Number to be used for billing clarifications"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillingInquiryPhoneCommunication;
Modeler.register(ElementBillingInquiryPhoneCommunication, "ElementBillingInquiryPhoneCommunication");
