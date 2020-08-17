var Modeler = require("../Modeler.js");
var className = 'TypeStartTimePeriodType';

var TypeStartTimePeriodType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StartDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Start DateTtime of the Time Period"
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
          "xsd:documentation": "Duration of the Time Period"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "End Date Time of the Time Period"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "TimePeriodType",
        attribute: false,
        type: "xsd:string"
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
	  StartDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Start DateTtime of the Time Period"
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
          "xsd:documentation": "Duration of the Time Period"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "End Date Time of the Time Period"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    undefined: {
      type: "string",
      wsdlDefinition: {
        base: "TimePeriodType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeStartTimePeriodType;
Modeler.register(TypeStartTimePeriodType, "TypeStartTimePeriodType");
