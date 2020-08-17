var Modeler = require("../Modeler.js");
var className = 'ElementShipmentItemLot';

var ElementShipmentItemLot = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentItemLot: {
      type: "TypeShipmentItemLotType",
      wsdlDefinition: {
        name: "ShipmentItemLot",
        type: "ShipmentItemLotType",
        "xsd:annotation": {
          "xsd:documentation": "This is a sub-component of the Shipment Item which encapsulates an Item Lot Reference and reify some of the Item Lot's properties for the Shipment Item usage context."
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
	  ShipmentItemLot: {
      type: "TypeShipmentItemLotType",
      wsdlDefinition: {
        name: "ShipmentItemLot",
        type: "ShipmentItemLotType",
        "xsd:annotation": {
          "xsd:documentation": "This is a sub-component of the Shipment Item which encapsulates an Item Lot Reference and reify some of the Item Lot's properties for the Shipment Item usage context."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentItemLot;
Modeler.register(ElementShipmentItemLot, "ElementShipmentItemLot");
