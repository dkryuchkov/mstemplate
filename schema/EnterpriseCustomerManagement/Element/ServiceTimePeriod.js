var Modeler = require("../Modeler.js");
var className = 'ElementServiceTimePeriod';

var ElementServiceTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "ServiceTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Period of time during which determines the time period/duration of a Service"
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
	  ServiceTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "ServiceTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Period of time during which determines the time period/duration of a Service"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceTimePeriod;
Modeler.register(ElementServiceTimePeriod, "ElementServiceTimePeriod");
