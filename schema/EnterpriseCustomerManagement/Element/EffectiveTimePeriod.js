var Modeler = require("../Modeler.js");
var className = 'ElementEffectiveTimePeriod';

var ElementEffectiveTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "A period of time for which something is effective"
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
	  EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "A period of time for which something is effective"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEffectiveTimePeriod;
Modeler.register(ElementEffectiveTimePeriod, "ElementEffectiveTimePeriod");
