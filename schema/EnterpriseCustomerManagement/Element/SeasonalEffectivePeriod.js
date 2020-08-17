var Modeler = require("../Modeler.js");
var className = 'ElementSeasonalEffectivePeriod';

var ElementSeasonalEffectivePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SeasonalEffectivePeriod: {
      type: "TypeSeasonalEffectivePeriodType",
      wsdlDefinition: {
        name: "SeasonalEffectivePeriod",
        type: "SeasonalEffectivePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Yearly recurring effective period."
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
	  SeasonalEffectivePeriod: {
      type: "TypeSeasonalEffectivePeriodType",
      wsdlDefinition: {
        name: "SeasonalEffectivePeriod",
        type: "SeasonalEffectivePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Yearly recurring effective period."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSeasonalEffectivePeriod;
Modeler.register(ElementSeasonalEffectivePeriod, "ElementSeasonalEffectivePeriod");
