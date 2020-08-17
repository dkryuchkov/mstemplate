var Modeler = require("../Modeler.js");
var className = 'TypePreferenceType';

var TypePreferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PriorityRanking: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PriorityRanking",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Priority of ranking of the associated object or component"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicator if this is preferred"
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
	  PriorityRanking: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PriorityRanking",
        type: "NumericType",
        "xsd:annotation": {
          "xsd:documentation": "Priority of ranking of the associated object or component"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicator if this is preferred"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePreferenceType;
Modeler.register(TypePreferenceType, "TypePreferenceType");
