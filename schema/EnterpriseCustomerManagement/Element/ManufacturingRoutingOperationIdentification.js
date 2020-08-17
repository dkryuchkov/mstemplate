var Modeler = require("../Modeler.js");
var className = 'ElementManufacturingRoutingOperationIdentification';

var ElementManufacturingRoutingOperationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManufacturingRoutingOperationIdentification: {
      type: "TypeManufacturingRoutingOperationIdentificationType",
      wsdlDefinition: {
        name: "ManufacturingRoutingOperationIdentification",
        type: "ManufacturingRoutingOperationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an operation in a manufacturing routing"
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
	  ManufacturingRoutingOperationIdentification: {
      type: "TypeManufacturingRoutingOperationIdentificationType",
      wsdlDefinition: {
        name: "ManufacturingRoutingOperationIdentification",
        type: "ManufacturingRoutingOperationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an operation in a manufacturing routing"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementManufacturingRoutingOperationIdentification;
Modeler.register(ElementManufacturingRoutingOperationIdentification, "ElementManufacturingRoutingOperationIdentification");
