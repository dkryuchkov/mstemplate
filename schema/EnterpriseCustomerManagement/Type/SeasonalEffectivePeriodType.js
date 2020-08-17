var Modeler = require("../Modeler.js");
var className = 'TypeSeasonalEffectivePeriodType';

var TypeSeasonalEffectivePeriodType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StartMonthDay: {
      type: "TypeMonthDayType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartMonthDay",
        type: "MonthDayType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndMonthDay: {
      type: "TypeMonthDayType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndMonthDay",
        type: "MonthDayType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSeasonalEffectivePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSeasonalEffectivePeriodType",
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
	  StartMonthDay: {
      type: "TypeMonthDayType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartMonthDay",
        type: "MonthDayType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndMonthDay: {
      type: "TypeMonthDayType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndMonthDay",
        type: "MonthDayType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSeasonalEffectivePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSeasonalEffectivePeriodType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSeasonalEffectivePeriodType;
Modeler.register(TypeSeasonalEffectivePeriodType, "TypeSeasonalEffectivePeriodType");
