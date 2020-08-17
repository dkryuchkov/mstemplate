var Modeler = require("../Modeler.js");
var className = 'ElementChangeIndicator';

var ElementChangeIndicator = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        name: "ChangeIndicator",
        type: "ChangeIndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Change Indicator"
        },
        ns: "corecomcust",
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
	  ChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        name: "ChangeIndicator",
        type: "ChangeIndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Change Indicator"
        },
        ns: "corecomcust",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementChangeIndicator;
Modeler.register(ElementChangeIndicator, "ElementChangeIndicator");
