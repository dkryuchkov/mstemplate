var Modeler = require("../Modeler.js");
var className = 'ElementItemLotReference';

var ElementItemLotReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemLotReference: {
      type: "TypeItemLotReferenceType",
      wsdlDefinition: {
        name: "ItemLotReference",
        type: "ItemLotReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item lot"
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
	  ItemLotReference: {
      type: "TypeItemLotReferenceType",
      wsdlDefinition: {
        name: "ItemLotReference",
        type: "ItemLotReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item lot"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemLotReference;
Modeler.register(ElementItemLotReference, "ElementItemLotReference");
