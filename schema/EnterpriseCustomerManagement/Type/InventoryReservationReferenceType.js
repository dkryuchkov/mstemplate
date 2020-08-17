var Modeler = require("../Modeler.js");
var className = 'TypeInventoryReservationReferenceType';

var TypeInventoryReservationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InventoryReservationIdentification: {
      type: "TypeInventoryReservationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InventoryReservationIdentification",
        type: "InventoryReservationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:InventoryReservationIdentification",
        type: "InventoryReservationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeInventoryReservationReferenceType;
Modeler.register(TypeInventoryReservationReferenceType, "TypeInventoryReservationReferenceType");
