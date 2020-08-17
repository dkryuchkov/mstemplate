var Modeler = require("../Modeler.js");
var className = 'ElementSupplierUpdateNotificationEmailCommunication';

var ElementSupplierUpdateNotificationEmailCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupplierUpdateNotificationEmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        name: "SupplierUpdateNotificationEmailCommunication",
        type: "EmailCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "The email communication information used for contacting/notifying the supplier when there is an update to contain object/compoent"
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
	  SupplierUpdateNotificationEmailCommunication: {
      type: "TypeEmailCommunicationType",
      wsdlDefinition: {
        name: "SupplierUpdateNotificationEmailCommunication",
        type: "EmailCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "The email communication information used for contacting/notifying the supplier when there is an update to contain object/compoent"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupplierUpdateNotificationEmailCommunication;
Modeler.register(ElementSupplierUpdateNotificationEmailCommunication, "ElementSupplierUpdateNotificationEmailCommunication");
