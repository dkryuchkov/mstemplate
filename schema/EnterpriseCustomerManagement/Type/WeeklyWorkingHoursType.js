var Modeler = require("../Modeler.js");
var className = 'TypeWeeklyWorkingHoursType';

var TypeWeeklyWorkingHoursType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MondayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MondayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Monday work duration, e.g., P8H is eight hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TuesdayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TuesdayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Tuesday work duration, e.g., P9H is nine hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WednesdayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WednesdayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Wednesday work duration, e.g., P7H is seven hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ThursdayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ThursdayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Thursday work duration, e.g., P7H30M is seven and a half hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FridayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FridayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Friday work duration, e.g., P7H30M is seven and a half hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SaturdayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SaturdayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Saturday work duration, e.g., P7H30M is seven and a half hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SundayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SundayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Sunday work duration, e.g., P7H30M is seven and a half hours."
        },
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
	  MondayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:MondayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Monday work duration, e.g., P8H is eight hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TuesdayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TuesdayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Tuesday work duration, e.g., P9H is nine hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WednesdayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WednesdayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Wednesday work duration, e.g., P7H is seven hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ThursdayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ThursdayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Thursday work duration, e.g., P7H30M is seven and a half hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FridayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FridayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Friday work duration, e.g., P7H30M is seven and a half hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SaturdayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SaturdayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Saturday work duration, e.g., P7H30M is seven and a half hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SundayDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SundayDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Sunday work duration, e.g., P7H30M is seven and a half hours."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWeeklyWorkingHoursType;
Modeler.register(TypeWeeklyWorkingHoursType, "TypeWeeklyWorkingHoursType");
