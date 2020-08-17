var Modeler = require("../Modeler.js");
var className = 'ElementParentItemLotReference';

var ElementParentItemLotReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentItemLotReference: {
      type: "TypeItemLotReferenceType",
      wsdlDefinition: {
        name: "ParentItemLotReference",
        type: "ItemLotReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item lot which is a parent of another item lot in context"
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
	  ParentItemLotReference: {
      type: "TypeItemLotReferenceType",
      wsdlDefinition: {
        name: "ParentItemLotReference",
        type: "ItemLotReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item lot which is a parent of another item lot in context"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentItemLotReference;
Modeler.register(ElementParentItemLotReference, "ElementParentItemLotReference");
