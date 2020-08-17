var Modeler = require("../Modeler.js");
var className = 'ElementAppointmentWindow';

var ElementAppointmentWindow = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AppointmentWindow: {
      type: "TypeAppointmentWindowType",
      wsdlDefinition: {
        name: "AppointmentWindow",
        type: "AppointmentWindowType",
        "xsd:annotation": {
          "xsd:documentation": "Appointment time slot or window in which the work, action, or event etc. will begin including."
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
	  AppointmentWindow: {
      type: "TypeAppointmentWindowType",
      wsdlDefinition: {
        name: "AppointmentWindow",
        type: "AppointmentWindowType",
        "xsd:annotation": {
          "xsd:documentation": "Appointment time slot or window in which the work, action, or event etc. will begin including."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAppointmentWindow;
Modeler.register(ElementAppointmentWindow, "ElementAppointmentWindow");
