var Modeler = require("../Modeler.js");
var className = 'ElementModelBillOfMaterialsComponentItemReference';

var ElementModelBillOfMaterialsComponentItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ModelBillOfMaterialsComponentItemReference: {
      type: "TypeBillOfMaterialsComponentItemReferenceType",
      wsdlDefinition: {
        name: "ModelBillOfMaterialsComponentItemReference",
        type: "BillOfMaterialsComponentItemReferenceType",
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
	  ModelBillOfMaterialsComponentItemReference: {
      type: "TypeBillOfMaterialsComponentItemReferenceType",
      wsdlDefinition: {
        name: "ModelBillOfMaterialsComponentItemReference",
        type: "BillOfMaterialsComponentItemReferenceType",
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

module.exports = ElementModelBillOfMaterialsComponentItemReference;
Modeler.register(ElementModelBillOfMaterialsComponentItemReference, "ElementModelBillOfMaterialsComponentItemReference");
