var Modeler = require("../Modeler.js");
var className = 'TypePurchaseOrderShipmentReferenceType';

var TypePurchaseOrderShipmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseOrderIdentification: {
      type: "TypePurchaseOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseOrderIdentification",
        type: "PurchaseOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PurchaseOrderLineIdentification: {
      type: "TypePurchaseOrderLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseOrderLineIdentification",
        type: "PurchaseOrderLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PurchaseOrderShipmentIdentification: {
      type: "TypePurchaseOrderShipmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseOrderShipmentIdentification",
        type: "PurchaseOrderShipmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPurchaseOrderShipmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPurchaseOrderShipmentReferenceType",
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
	  PurchaseOrderIdentification: {
      type: "TypePurchaseOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseOrderIdentification",
        type: "PurchaseOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PurchaseOrderLineIdentification: {
      type: "TypePurchaseOrderLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseOrderLineIdentification",
        type: "PurchaseOrderLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PurchaseOrderShipmentIdentification: {
      type: "TypePurchaseOrderShipmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseOrderShipmentIdentification",
        type: "PurchaseOrderShipmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPurchaseOrderShipmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPurchaseOrderShipmentReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePurchaseOrderShipmentReferenceType;
Modeler.register(TypePurchaseOrderShipmentReferenceType, "TypePurchaseOrderShipmentReferenceType");
