var Modeler = require("../Modeler.js");
var className = 'ElementShipmentItemAttachment';

var ElementShipmentItemAttachment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentItemAttachment: {
      type: "TypeShipmentItemAttachmentType",
      wsdlDefinition: {
        name: "ShipmentItemAttachment",
        type: "ShipmentItemAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Additional information abou this shipped item provided in the form of pointer to a location or binary content"
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
	  ShipmentItemAttachment: {
      type: "TypeShipmentItemAttachmentType",
      wsdlDefinition: {
        name: "ShipmentItemAttachment",
        type: "ShipmentItemAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Additional information abou this shipped item provided in the form of pointer to a location or binary content"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentItemAttachment;
Modeler.register(ElementShipmentItemAttachment, "ElementShipmentItemAttachment");
