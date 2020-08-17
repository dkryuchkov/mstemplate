var Modeler = require("../Modeler.js");
var className = 'ElementShipmentSet';

var ElementShipmentSet = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentSet: {
      type: "TypeShipmentSetType",
      wsdlDefinition: {
        name: "ShipmentSet",
        type: "ShipmentSetType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates Item Instances that are shipped together or that must be shipped together"
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
	  ShipmentSet: {
      type: "TypeShipmentSetType",
      wsdlDefinition: {
        name: "ShipmentSet",
        type: "ShipmentSetType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates Item Instances that are shipped together or that must be shipped together"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentSet;
Modeler.register(ElementShipmentSet, "ElementShipmentSet");
