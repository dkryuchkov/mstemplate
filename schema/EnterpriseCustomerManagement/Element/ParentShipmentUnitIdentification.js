var Modeler = require("../Modeler.js");
var className = 'ElementParentShipmentUnitIdentification';

var ElementParentShipmentUnitIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentShipmentUnitIdentification: {
      type: "TypeShipmentUnitIdentificationType",
      wsdlDefinition: {
        name: "ParentShipmentUnitIdentification",
        type: "ShipmentUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Unit which is a parent of another Shipment Unit (either logically a parent or physically a parent by packaging"
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
	  ParentShipmentUnitIdentification: {
      type: "TypeShipmentUnitIdentificationType",
      wsdlDefinition: {
        name: "ParentShipmentUnitIdentification",
        type: "ShipmentUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Unit which is a parent of another Shipment Unit (either logically a parent or physically a parent by packaging"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentShipmentUnitIdentification;
Modeler.register(ElementParentShipmentUnitIdentification, "ElementParentShipmentUnitIdentification");
