var Modeler = require("../Modeler.js");
var className = 'TypeAppointmentReferenceType';

var TypeAppointmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AppointmentIdentification: {
      type: "TypeAppointmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AppointmentIdentification",
        type: "AppointmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:AppointmentIdentification",
        type: "AppointmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAppointmentReferenceType;
Modeler.register(TypeAppointmentReferenceType, "TypeAppointmentReferenceType");
