var Modeler = require("../Modeler.js");
var className = 'TypeShipmentItemReferenceType';

var TypeShipmentItemReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentIdentification: {
      type: "TypeShipmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentIdentification",
        type: "ShipmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentItemIdentification: {
      type: "TypeShipmentItemIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemIdentification",
        type: "ShipmentItemIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomShipmentItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomShipmentItemReferenceType",
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
	  ShipmentIdentification: {
      type: "TypeShipmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentIdentification",
        type: "ShipmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentItemIdentification: {
      type: "TypeShipmentItemIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemIdentification",
        type: "ShipmentItemIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomShipmentItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomShipmentItemReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeShipmentItemReferenceType;
Modeler.register(TypeShipmentItemReferenceType, "TypeShipmentItemReferenceType");
