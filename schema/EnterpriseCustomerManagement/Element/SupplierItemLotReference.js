var Modeler = require("../Modeler.js");
var className = 'ElementSupplierItemLotReference';

var ElementSupplierItemLotReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupplierItemLotReference: {
      type: "TypeItemLotReferenceType",
      wsdlDefinition: {
        name: "SupplierItemLotReference",
        type: "ItemLotReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to item lot using the number given by the supplier"
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
	  SupplierItemLotReference: {
      type: "TypeItemLotReferenceType",
      wsdlDefinition: {
        name: "SupplierItemLotReference",
        type: "ItemLotReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to item lot using the number given by the supplier"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupplierItemLotReference;
Modeler.register(ElementSupplierItemLotReference, "ElementSupplierItemLotReference");
