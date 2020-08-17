var Modeler = require("../Modeler.js");
var className = 'ElementRelativeEffectiveTimePeriod';

var ElementRelativeEffectiveTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelativeEffectiveTimePeriod: {
      type: "TypeRelativeEffectiveTimePeriodType",
      wsdlDefinition: {
        name: "RelativeEffectiveTimePeriod",
        type: "RelativeEffectiveTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "This component is used for specifying an effective time period by using durations from a contextual time point. For example, an effectivity of a telephone rate can be specified as starting at 3 months from the purchase date and ending at 5 months from the purhase date (optionally specifying as 2 months from the start)."
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
	  RelativeEffectiveTimePeriod: {
      type: "TypeRelativeEffectiveTimePeriodType",
      wsdlDefinition: {
        name: "RelativeEffectiveTimePeriod",
        type: "RelativeEffectiveTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "This component is used for specifying an effective time period by using durations from a contextual time point. For example, an effectivity of a telephone rate can be specified as starting at 3 months from the purchase date and ending at 5 months from the purhase date (optionally specifying as 2 months from the start)."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelativeEffectiveTimePeriod;
Modeler.register(ElementRelativeEffectiveTimePeriod, "ElementRelativeEffectiveTimePeriod");
