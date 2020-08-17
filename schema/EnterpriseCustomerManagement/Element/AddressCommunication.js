var Modeler = require("../Modeler.js");
var className = 'ElementAddressCommunication';

var ElementAddressCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AddressCommunication: {
      type: "TypeAddressCommunicationType",
      wsdlDefinition: {
        name: "AddressCommunication",
        type: "AddressCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the location at which a particular organization or person may be found or reached, including information about how that location is used"
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
	  AddressCommunication: {
      type: "TypeAddressCommunicationType",
      wsdlDefinition: {
        name: "AddressCommunication",
        type: "AddressCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the location at which a particular organization or person may be found or reached, including information about how that location is used"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAddressCommunication;
Modeler.register(ElementAddressCommunication, "ElementAddressCommunication");
