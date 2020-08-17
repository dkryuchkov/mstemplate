var Modeler = require("../Modeler.js");
var className = 'ElementModelBillOfMaterialsReference';

var ElementModelBillOfMaterialsReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ModelBillOfMaterialsReference: {
      type: "TypeBillOfMaterialsReferenceType",
      wsdlDefinition: {
        name: "ModelBillOfMaterialsReference",
        type: "BillOfMaterialsReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the component of the model BOM that this component item corresponds to (for ATO)"
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
	  ModelBillOfMaterialsReference: {
      type: "TypeBillOfMaterialsReferenceType",
      wsdlDefinition: {
        name: "ModelBillOfMaterialsReference",
        type: "BillOfMaterialsReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the component of the model BOM that this component item corresponds to (for ATO)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModelBillOfMaterialsReference;
Modeler.register(ElementModelBillOfMaterialsReference, "ElementModelBillOfMaterialsReference");
