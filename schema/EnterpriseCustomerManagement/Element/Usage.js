var Modeler = require("../Modeler.js");
var className = 'ElementUsage';

var ElementUsage = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Usage: {
      type: "TypeUsageType",
      wsdlDefinition: {
        name: "Usage",
        type: "UsageType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates usage of the associated object or component"
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
	  Usage: {
      type: "TypeUsageType",
      wsdlDefinition: {
        name: "Usage",
        type: "UsageType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates usage of the associated object or component"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUsage;
Modeler.register(ElementUsage, "ElementUsage");
