var Modeler = require("../Modeler.js");
var className = 'ElementOriginalOrderItemReference';

var ElementOriginalOrderItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalOrderItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "OriginalOrderItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the original order that was on an order, that was later substituted by another because of cross-sell, uip-sell or other reasons"
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
	  OriginalOrderItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "OriginalOrderItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the original order that was on an order, that was later substituted by another because of cross-sell, uip-sell or other reasons"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalOrderItemReference;
Modeler.register(ElementOriginalOrderItemReference, "ElementOriginalOrderItemReference");
