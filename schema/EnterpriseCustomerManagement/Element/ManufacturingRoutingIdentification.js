var Modeler = require("../Modeler.js");
var className = 'ElementManufacturingRoutingIdentification';

var ElementManufacturingRoutingIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManufacturingRoutingIdentification: {
      type: "TypeManufacturingRoutingIdentificationType",
      wsdlDefinition: {
        name: "ManufacturingRoutingIdentification",
        type: "ManufacturingRoutingIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a manufacturing routing"
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
	  ManufacturingRoutingIdentification: {
      type: "TypeManufacturingRoutingIdentificationType",
      wsdlDefinition: {
        name: "ManufacturingRoutingIdentification",
        type: "ManufacturingRoutingIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a manufacturing routing"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementManufacturingRoutingIdentification;
Modeler.register(ElementManufacturingRoutingIdentification, "ElementManufacturingRoutingIdentification");
