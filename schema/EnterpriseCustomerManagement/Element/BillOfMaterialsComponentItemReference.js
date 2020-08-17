var Modeler = require("../Modeler.js");
var className = 'ElementBillOfMaterialsComponentItemReference';

var ElementBillOfMaterialsComponentItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillOfMaterialsComponentItemReference: {
      type: "TypeBillOfMaterialsComponentItemReferenceType",
      wsdlDefinition: {
        name: "BillOfMaterialsComponentItemReference",
        type: "BillOfMaterialsComponentItemReferenceType",
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
	  BillOfMaterialsComponentItemReference: {
      type: "TypeBillOfMaterialsComponentItemReferenceType",
      wsdlDefinition: {
        name: "BillOfMaterialsComponentItemReference",
        type: "BillOfMaterialsComponentItemReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillOfMaterialsComponentItemReference;
Modeler.register(ElementBillOfMaterialsComponentItemReference, "ElementBillOfMaterialsComponentItemReference");
