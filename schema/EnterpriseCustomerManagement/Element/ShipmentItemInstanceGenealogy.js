var Modeler = require("../Modeler.js");
var className = 'ElementShipmentItemInstanceGenealogy';

var ElementShipmentItemInstanceGenealogy = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentItemInstanceGenealogy: {
      type: "TypeShipmentItemInstanceGenealogyType",
      wsdlDefinition: {
        name: "ShipmentItemInstanceGenealogy",
        type: "ShipmentItemInstanceGenealogyType",
        "xsd:annotation": {
          "xsd:documentation": "This is a sub-component of the Shipment Item used for capturing the genealogy of a Shipment Item Instance. Genealogy of an item stance details raw item instances (including lot information) composed into that item instance."
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
	  ShipmentItemInstanceGenealogy: {
      type: "TypeShipmentItemInstanceGenealogyType",
      wsdlDefinition: {
        name: "ShipmentItemInstanceGenealogy",
        type: "ShipmentItemInstanceGenealogyType",
        "xsd:annotation": {
          "xsd:documentation": "This is a sub-component of the Shipment Item used for capturing the genealogy of a Shipment Item Instance. Genealogy of an item stance details raw item instances (including lot information) composed into that item instance."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentItemInstanceGenealogy;
Modeler.register(ElementShipmentItemInstanceGenealogy, "ElementShipmentItemInstanceGenealogy");
