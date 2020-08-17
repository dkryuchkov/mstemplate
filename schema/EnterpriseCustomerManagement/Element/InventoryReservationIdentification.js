var Modeler = require("../Modeler.js");
var className = 'ElementInventoryReservationIdentification';

var ElementInventoryReservationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InventoryReservationIdentification: {
      type: "TypeInventoryReservationIdentificationType",
      wsdlDefinition: {
        name: "InventoryReservationIdentification",
        type: "InventoryReservationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "A unique identification of an Inventory Reservation transaction."
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
	  InventoryReservationIdentification: {
      type: "TypeInventoryReservationIdentificationType",
      wsdlDefinition: {
        name: "InventoryReservationIdentification",
        type: "InventoryReservationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "A unique identification of an Inventory Reservation transaction."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInventoryReservationIdentification;
Modeler.register(ElementInventoryReservationIdentification, "ElementInventoryReservationIdentification");
