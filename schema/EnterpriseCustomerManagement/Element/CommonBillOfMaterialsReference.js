var Modeler = require("../Modeler.js");
var className = 'ElementCommonBillOfMaterialsReference';

var ElementCommonBillOfMaterialsReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CommonBillOfMaterialsReference: {
      type: "TypeBillOfMaterialsReferenceType",
      wsdlDefinition: {
        name: "CommonBillOfMaterialsReference",
        type: "BillOfMaterialsReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a BOM whose definition has been inherited by the BOM to which this reference is associated"
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
	  CommonBillOfMaterialsReference: {
      type: "TypeBillOfMaterialsReferenceType",
      wsdlDefinition: {
        name: "CommonBillOfMaterialsReference",
        type: "BillOfMaterialsReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies a BOM whose definition has been inherited by the BOM to which this reference is associated"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCommonBillOfMaterialsReference;
Modeler.register(ElementCommonBillOfMaterialsReference, "ElementCommonBillOfMaterialsReference");
