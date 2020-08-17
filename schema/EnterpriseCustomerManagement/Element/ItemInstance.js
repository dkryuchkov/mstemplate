var Modeler = require("../Modeler.js");
var className = 'ElementItemInstance';

var ElementItemInstance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemInstance: {
      type: "TypeItemInstanceType",
      wsdlDefinition: {
        name: "ItemInstance",
        type: "ItemInstanceType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of a unique instance of an item including serial number, RFID and lot properties"
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
	  ItemInstance: {
      type: "TypeItemInstanceType",
      wsdlDefinition: {
        name: "ItemInstance",
        type: "ItemInstanceType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of a unique instance of an item including serial number, RFID and lot properties"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemInstance;
Modeler.register(ElementItemInstance, "ElementItemInstance");
