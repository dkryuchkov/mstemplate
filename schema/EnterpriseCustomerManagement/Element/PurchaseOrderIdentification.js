var Modeler = require("../Modeler.js");
var className = 'ElementPurchaseOrderIdentification';

var ElementPurchaseOrderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PurchaseOrderIdentification: {
      type: "TypePurchaseOrderIdentificationType",
      wsdlDefinition: {
        name: "PurchaseOrderIdentification",
        type: "PurchaseOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Purchase Order"
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
	  PurchaseOrderIdentification: {
      type: "TypePurchaseOrderIdentificationType",
      wsdlDefinition: {
        name: "PurchaseOrderIdentification",
        type: "PurchaseOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Purchase Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPurchaseOrderIdentification;
Modeler.register(ElementPurchaseOrderIdentification, "ElementPurchaseOrderIdentification");
