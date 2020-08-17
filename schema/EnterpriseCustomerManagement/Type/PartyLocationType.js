var Modeler = require("../Modeler.js");
var className = 'TypePartyLocationType';

var TypePartyLocationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationReference",
        type: "LocationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SeasonalIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SeasonalIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the party seasonally occupies this location. This is used, for example, in marketing campaign. The marketing application will not send any marketing material to the location during off-season period (determined by the location information)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SeasonalEffectivePeriod: {
      type: "TypeSeasonalEffectivePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SeasonalEffectivePeriod",
        type: "SeasonalEffectivePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Yearly recurring effective period indicating when the location is effective for each year (if the location is a seasonal location)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPartyLocationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPartyLocationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationReference",
        type: "LocationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SeasonalIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SeasonalIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the party seasonally occupies this location. This is used, for example, in marketing campaign. The marketing application will not send any marketing material to the location during off-season period (determined by the location information)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SeasonalEffectivePeriod: {
      type: "TypeSeasonalEffectivePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SeasonalEffectivePeriod",
        type: "SeasonalEffectivePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Yearly recurring effective period indicating when the location is effective for each year (if the location is a seasonal location)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPartyLocationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPartyLocationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePartyLocationType;
Modeler.register(TypePartyLocationType, "TypePartyLocationType");
