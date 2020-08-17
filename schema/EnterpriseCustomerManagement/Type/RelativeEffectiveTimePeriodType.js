var Modeler = require("../Modeler.js");
var className = 'TypeRelativeEffectiveTimePeriodType';

var TypeRelativeEffectiveTimePeriodType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelativeStartDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelativeStartDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "The duration from the implied time point (from the parent context) at which the effectivity starts"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelativeEndDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelativeEndDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "The duration from the implied time point (from the parent context) at which the effectivity ends"
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
          "xsd:documentation": "Duration from the Relative Start Duration when the effectivity ends"
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
	  RelativeStartDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelativeStartDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "The duration from the implied time point (from the parent context) at which the effectivity starts"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelativeEndDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RelativeEndDuration",
        type: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "The duration from the implied time point (from the parent context) at which the effectivity ends"
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
          "xsd:documentation": "Duration from the Relative Start Duration when the effectivity ends"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRelativeEffectiveTimePeriodType;
Modeler.register(TypeRelativeEffectiveTimePeriodType, "TypeRelativeEffectiveTimePeriodType");
