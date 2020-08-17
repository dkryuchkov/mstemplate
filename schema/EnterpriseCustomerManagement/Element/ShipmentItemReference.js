var Modeler = require("../Modeler.js");
var className = 'ElementShipmentItemReference';

var ElementShipmentItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentItemReference: {
      type: "TypeShipmentItemReferenceType",
      wsdlDefinition: {
        name: "ShipmentItemReference",
        type: "ShipmentItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Shipment Item. A Shipment Item provides general information about the item inventory being delivered, including the planned and actual quantities.  This information usually directly references a line item or shipment schedule line on a sales order, purchase order or other inventory transfer document."
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
	  ShipmentItemReference: {
      type: "TypeShipmentItemReferenceType",
      wsdlDefinition: {
        name: "ShipmentItemReference",
        type: "ShipmentItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Shipment Item. A Shipment Item provides general information about the item inventory being delivered, including the planned and actual quantities.  This information usually directly references a line item or shipment schedule line on a sales order, purchase order or other inventory transfer document."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentItemReference;
Modeler.register(ElementShipmentItemReference, "ElementShipmentItemReference");
