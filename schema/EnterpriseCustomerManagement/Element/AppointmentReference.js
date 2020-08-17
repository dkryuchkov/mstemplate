var Modeler = require("../Modeler.js");
var className = 'ElementAppointmentReference';

var ElementAppointmentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AppointmentReference: {
      type: "TypeAppointmentReferenceType",
      wsdlDefinition: {
        name: "AppointmentReference",
        type: "AppointmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Appointment. Appointment is a kind of activity. An Appointment is a plan or schedule to meet a person or group of persons. In sales, an Appointment is typically a scheduled date and time to meet a customer."
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
	  AppointmentReference: {
      type: "TypeAppointmentReferenceType",
      wsdlDefinition: {
        name: "AppointmentReference",
        type: "AppointmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Appointment. Appointment is a kind of activity. An Appointment is a plan or schedule to meet a person or group of persons. In sales, an Appointment is typically a scheduled date and time to meet a customer."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAppointmentReference;
Modeler.register(ElementAppointmentReference, "ElementAppointmentReference");
