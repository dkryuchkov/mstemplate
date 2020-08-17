var Modeler = require("../Modeler.js");
var className = 'ElementOriginalPurchaseOrderShipmentIdentification';

var ElementOriginalPurchaseOrderShipmentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalPurchaseOrderShipmentIdentification: {
      type: "TypeShipmentIdentificationType",
      wsdlDefinition: {
        name: "OriginalPurchaseOrderShipmentIdentification",
        type: "ShipmentIdentificationType",
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
	  OriginalPurchaseOrderShipmentIdentification: {
      type: "TypeShipmentIdentificationType",
      wsdlDefinition: {
        name: "OriginalPurchaseOrderShipmentIdentification",
        type: "ShipmentIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalPurchaseOrderShipmentIdentification;
Modeler.register(ElementOriginalPurchaseOrderShipmentIdentification, "ElementOriginalPurchaseOrderShipmentIdentification");
