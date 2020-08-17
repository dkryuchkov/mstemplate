var Modeler = require("../Modeler.js");
var className = 'ElementShipmentAttachment';

var ElementShipmentAttachment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentAttachment: {
      type: "TypeShipmentAttachmentType",
      wsdlDefinition: {
        name: "ShipmentAttachment",
        type: "ShipmentAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Additional information about the shipment provided in the form of location pointer or binary content"
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
	  ShipmentAttachment: {
      type: "TypeShipmentAttachmentType",
      wsdlDefinition: {
        name: "ShipmentAttachment",
        type: "ShipmentAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Additional information about the shipment provided in the form of location pointer or binary content"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentAttachment;
Modeler.register(ElementShipmentAttachment, "ElementShipmentAttachment");
