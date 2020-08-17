var Modeler = require("../Modeler.js");
var className = 'ElementSupplierUpdateNotificationFaxCommunication';

var ElementSupplierUpdateNotificationFaxCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupplierUpdateNotificationFaxCommunication: {
      type: "TypeFaxCommunicationType",
      wsdlDefinition: {
        name: "SupplierUpdateNotificationFaxCommunication",
        type: "FaxCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "The fax communication information used for contacting/notifying the supplier when there is an update to contain object/compoent"
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
	  SupplierUpdateNotificationFaxCommunication: {
      type: "TypeFaxCommunicationType",
      wsdlDefinition: {
        name: "SupplierUpdateNotificationFaxCommunication",
        type: "FaxCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "The fax communication information used for contacting/notifying the supplier when there is an update to contain object/compoent"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupplierUpdateNotificationFaxCommunication;
Modeler.register(ElementSupplierUpdateNotificationFaxCommunication, "ElementSupplierUpdateNotificationFaxCommunication");
