var Modeler = require("../Modeler.js");
var className = 'TypeTimeDurationType';

var TypeTimeDurationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StartTime: {
      type: "TypeTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartTime",
        type: "TimeType",
        "xsd:annotation": {
          "xsd:documentation": "Start time of the duration"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndTime: {
      type: "TypeTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndTime",
        type: "TimeType",
        "xsd:annotation": {
          "xsd:documentation": "End time of the duration"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Duration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Duration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Length of time for the duration"
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
	  StartTime: {
      type: "TypeTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartTime",
        type: "TimeType",
        "xsd:annotation": {
          "xsd:documentation": "Start time of the duration"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndTime: {
      type: "TypeTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndTime",
        type: "TimeType",
        "xsd:annotation": {
          "xsd:documentation": "End time of the duration"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Duration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Duration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Length of time for the duration"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTimeDurationType;
Modeler.register(TypeTimeDurationType, "TypeTimeDurationType");
