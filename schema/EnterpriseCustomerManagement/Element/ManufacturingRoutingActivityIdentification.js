var Modeler = require("../Modeler.js");
var className = 'ElementManufacturingRoutingActivityIdentification';

var ElementManufacturingRoutingActivityIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManufacturingRoutingActivityIdentification: {
      type: "TypeManufacturingRoutingActivityIdentificationType",
      wsdlDefinition: {
        name: "ManufacturingRoutingActivityIdentification",
        type: "ManufacturingRoutingActivityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an activity of an operation in a manufacturing routing"
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
	  ManufacturingRoutingActivityIdentification: {
      type: "TypeManufacturingRoutingActivityIdentificationType",
      wsdlDefinition: {
        name: "ManufacturingRoutingActivityIdentification",
        type: "ManufacturingRoutingActivityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an activity of an operation in a manufacturing routing"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementManufacturingRoutingActivityIdentification;
Modeler.register(ElementManufacturingRoutingActivityIdentification, "ElementManufacturingRoutingActivityIdentification");
