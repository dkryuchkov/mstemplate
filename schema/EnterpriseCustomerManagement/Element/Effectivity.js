var Modeler = require("../Modeler.js");
var className = 'ElementEffectivity';

var ElementEffectivity = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Effectivity: {
      type: "TypeEffectivityType",
      wsdlDefinition: {
        name: "Effectivity",
        type: "EffectivityType",
        "xsd:annotation": {
          "xsd:documentation": "Specify an active or inactive status of a containing object/component with a specified time frame"
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
	  Effectivity: {
      type: "TypeEffectivityType",
      wsdlDefinition: {
        name: "Effectivity",
        type: "EffectivityType",
        "xsd:annotation": {
          "xsd:documentation": "Specify an active or inactive status of a containing object/component with a specified time frame"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEffectivity;
Modeler.register(ElementEffectivity, "ElementEffectivity");
