var Modeler = require("../Modeler.js");
var className = 'ElementBillOfMaterialsReference';

var ElementBillOfMaterialsReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillOfMaterialsReference: {
      type: "TypeBillOfMaterialsReferenceType",
      wsdlDefinition: {
        name: "BillOfMaterialsReference",
        type: "BillOfMaterialsReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Bill Of Materials describes the \"parts list\" of components needed to complete an end-item"
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
	  BillOfMaterialsReference: {
      type: "TypeBillOfMaterialsReferenceType",
      wsdlDefinition: {
        name: "BillOfMaterialsReference",
        type: "BillOfMaterialsReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Bill Of Materials describes the \"parts list\" of components needed to complete an end-item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillOfMaterialsReference;
Modeler.register(ElementBillOfMaterialsReference, "ElementBillOfMaterialsReference");
