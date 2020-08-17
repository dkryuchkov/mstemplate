var Modeler = require("../Modeler.js");
var className = 'ElementShipmentItem';

var ElementShipmentItem = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentItem: {
      type: "TypeShipmentItemType",
      wsdlDefinition: {
        name: "ShipmentItem",
        type: "ShipmentItemType",
        "xsd:annotation": {
          "xsd:documentation": "Provides general information about the item inventory being delivered, including the planned and actual quantities.  This information usually directly references a line item or shipment schedule line on a sales order, purchase order or other inventory transfer document."
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
	  ShipmentItem: {
      type: "TypeShipmentItemType",
      wsdlDefinition: {
        name: "ShipmentItem",
        type: "ShipmentItemType",
        "xsd:annotation": {
          "xsd:documentation": "Provides general information about the item inventory being delivered, including the planned and actual quantities.  This information usually directly references a line item or shipment schedule line on a sales order, purchase order or other inventory transfer document."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentItem;
Modeler.register(ElementShipmentItem, "ElementShipmentItem");
