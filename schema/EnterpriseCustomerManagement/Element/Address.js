var Modeler = require("../Modeler.js");
var className = 'ElementAddress';

var ElementAddress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Address: {
      type: "TypeAddressType",
      wsdlDefinition: {
        name: "Address",
        type: "AddressType",
        "xsd:annotation": {
          "xsd:documentation": "The location at which a particular organization or person may be found or reached"
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
	  Address: {
      type: "TypeAddressType",
      wsdlDefinition: {
        name: "Address",
        type: "AddressType",
        "xsd:annotation": {
          "xsd:documentation": "The location at which a particular organization or person may be found or reached"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAddress;
Modeler.register(ElementAddress, "ElementAddress");
