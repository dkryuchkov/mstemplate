var Modeler = require("../Modeler.js");
var className = 'ElementAppointmentIdentification';

var ElementAppointmentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AppointmentIdentification: {
      type: "TypeAppointmentIdentificationType",
      wsdlDefinition: {
        name: "AppointmentIdentification",
        type: "AppointmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Appointment."
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
	  AppointmentIdentification: {
      type: "TypeAppointmentIdentificationType",
      wsdlDefinition: {
        name: "AppointmentIdentification",
        type: "AppointmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Appointment."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAppointmentIdentification;
Modeler.register(ElementAppointmentIdentification, "ElementAppointmentIdentification");
