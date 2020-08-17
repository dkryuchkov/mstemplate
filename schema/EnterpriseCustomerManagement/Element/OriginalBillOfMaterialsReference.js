var Modeler = require("../Modeler.js");
var className = 'ElementOriginalBillOfMaterialsReference';

var ElementOriginalBillOfMaterialsReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalBillOfMaterialsReference: {
      type: "TypeBillOfMaterialsReferenceType",
      wsdlDefinition: {
        name: "OriginalBillOfMaterialsReference",
        type: "BillOfMaterialsReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the BOM whose definition has been copied to create another BOM"
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
	  OriginalBillOfMaterialsReference: {
      type: "TypeBillOfMaterialsReferenceType",
      wsdlDefinition: {
        name: "OriginalBillOfMaterialsReference",
        type: "BillOfMaterialsReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the BOM whose definition has been copied to create another BOM"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalBillOfMaterialsReference;
Modeler.register(ElementOriginalBillOfMaterialsReference, "ElementOriginalBillOfMaterialsReference");
