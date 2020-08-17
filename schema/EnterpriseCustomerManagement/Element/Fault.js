var Modeler = require("../Modeler.js");
var className = 'ElementFault';

var ElementFault = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Fault: {
      type: "TypeFaultType",
      wsdlDefinition: {
        name: "Fault",
        type: "FaultType",
        "xsd:annotation": {
          "xsd:documentation": {}
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
	  Fault: {
      type: "TypeFaultType",
      wsdlDefinition: {
        name: "Fault",
        type: "FaultType",
        "xsd:annotation": {
          "xsd:documentation": {}
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFault;
Modeler.register(ElementFault, "ElementFault");
