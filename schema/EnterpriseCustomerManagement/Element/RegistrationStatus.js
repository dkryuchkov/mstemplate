var Modeler = require("../Modeler.js");
var className = 'ElementRegistrationStatus';

var ElementRegistrationStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RegistrationStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "RegistrationStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of the registration of an object or item with an authority (manufacturer, list manager etc (e.g., Registered-Approved, Registered-Not Approved, Not Registered etc.)"
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
	  RegistrationStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "RegistrationStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of the registration of an object or item with an authority (manufacturer, list manager etc (e.g., Registered-Approved, Registered-Not Approved, Not Registered etc.)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRegistrationStatus;
Modeler.register(ElementRegistrationStatus, "ElementRegistrationStatus");
