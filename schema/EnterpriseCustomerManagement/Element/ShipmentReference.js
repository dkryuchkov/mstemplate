var Modeler = require("../Modeler.js");
var className = 'ElementShipmentReference';

var ElementShipmentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentReference: {
      type: "TypeShipmentReferenceType",
      wsdlDefinition: {
        name: "ShipmentReference",
        type: "ShipmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Shipment. A Shipment identifies and describes a specific collection of goods to be transported by a carrier and delivered to one or more business partner destinations.   A Shipment document represents the extent and content of \"transportation work\" to be done by the carrier.  For transportation efficiency, a shipment document typically consolidates deliveries to multiple destinations within a certain geographic region and may provide carrier routing instructions to each delivery stop."
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
	  ShipmentReference: {
      type: "TypeShipmentReferenceType",
      wsdlDefinition: {
        name: "ShipmentReference",
        type: "ShipmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Shipment. A Shipment identifies and describes a specific collection of goods to be transported by a carrier and delivered to one or more business partner destinations.   A Shipment document represents the extent and content of \"transportation work\" to be done by the carrier.  For transportation efficiency, a shipment document typically consolidates deliveries to multiple destinations within a certain geographic region and may provide carrier routing instructions to each delivery stop."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentReference;
Modeler.register(ElementShipmentReference, "ElementShipmentReference");
