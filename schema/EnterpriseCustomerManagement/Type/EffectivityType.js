var Modeler = require("../Modeler.js");
var className = 'TypeEffectivityType';

var TypeEffectivityType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ActiveIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActiveIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the associated row is active (true) or inactive (false). Although the time period maybe current, the false indicator would means that the row is inactive. If the ActiveIndicator is absent, the effectivity of the row is only determined via the time period (whether it is current)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TimePeriod",
        type: "TimePeriodType",
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
	  ActiveIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActiveIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the associated row is active (true) or inactive (false). Although the time period maybe current, the false indicator would means that the row is inactive. If the ActiveIndicator is absent, the effectivity of the row is only determined via the time period (whether it is current)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TimePeriod",
        type: "TimePeriodType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEffectivityType;
Modeler.register(TypeEffectivityType, "TypeEffectivityType");
