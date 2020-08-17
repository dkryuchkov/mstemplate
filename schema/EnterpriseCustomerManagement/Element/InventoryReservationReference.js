var Modeler = require("../Modeler.js");
var className = 'ElementInventoryReservationReference';

var ElementInventoryReservationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InventoryReservationReference: {
      type: "TypeInventoryReservationReferenceType",
      wsdlDefinition: {
        name: "InventoryReservationReference",
        type: "InventoryReservationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Inventory Reservation transaction."
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
	  InventoryReservationReference: {
      type: "TypeInventoryReservationReferenceType",
      wsdlDefinition: {
        name: "InventoryReservationReference",
        type: "InventoryReservationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Inventory Reservation transaction."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInventoryReservationReference;
Modeler.register(ElementInventoryReservationReference, "ElementInventoryReservationReference");
