var Modeler = require("../Modeler.js");
var className = 'TypeAppointmentWindowType';

var TypeAppointmentWindowType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StartTimePeriod: {
      type: "TypeStartTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartTimePeriod",
        type: "StartTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time window in which the work, event, action, etc. is expected to begin."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OperationalPreferenceCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OperationalPreferenceCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The priority or preference level assigned  this appointment time period.  This is a preference level from the companies perspective."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAppointmentWindowType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAppointmentWindowType",
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StartTimePeriod: {
      type: "TypeStartTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartTimePeriod",
        type: "StartTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time window in which the work, event, action, etc. is expected to begin."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OperationalPreferenceCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OperationalPreferenceCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The priority or preference level assigned  this appointment time period.  This is a preference level from the companies perspective."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAppointmentWindowType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAppointmentWindowType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAppointmentWindowType;
Modeler.register(TypeAppointmentWindowType, "TypeAppointmentWindowType");
