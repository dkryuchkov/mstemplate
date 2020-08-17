var Modeler = require("../Modeler.js");
var className = 'ElementSeasonTimePeriod';

var ElementSeasonTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SeasonTimePeriod: {
      type: "TypeSeasonTimePeriodType",
      wsdlDefinition: {
        name: "SeasonTimePeriod",
        type: "SeasonTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period for a particular season."
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
	  SeasonTimePeriod: {
      type: "TypeSeasonTimePeriodType",
      wsdlDefinition: {
        name: "SeasonTimePeriod",
        type: "SeasonTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period for a particular season."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSeasonTimePeriod;
Modeler.register(ElementSeasonTimePeriod, "ElementSeasonTimePeriod");
