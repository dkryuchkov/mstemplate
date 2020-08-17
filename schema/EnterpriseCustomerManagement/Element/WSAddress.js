var Modeler = require("../Modeler.js");
var className = 'ElementWSAddress';

var ElementWSAddress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WSAddress: {
      type: "TypeWSAddressType",
      wsdlDefinition: {
        name: "WSAddress",
        type: "WSAddressType",
        "xsd:annotation": {
          "xsd:documentation": "Placeholder to transport WS-Addressing information"
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
	  WSAddress: {
      type: "TypeWSAddressType",
      wsdlDefinition: {
        name: "WSAddress",
        type: "WSAddressType",
        "xsd:annotation": {
          "xsd:documentation": "Placeholder to transport WS-Addressing information"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWSAddress;
Modeler.register(ElementWSAddress, "ElementWSAddress");
