var Modeler = require("../Modeler.js");
var className = 'TypeCustomModelBillOfMaterialsReferenceType';

var TypeCustomModelBillOfMaterialsReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomModelBillOfMaterialsReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomModelBillOfMaterialsReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomModelBillOfMaterialsReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomModelBillOfMaterialsReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomModelBillOfMaterialsReferenceType;
Modeler.register(TypeCustomModelBillOfMaterialsReferenceType, "TypeCustomModelBillOfMaterialsReferenceType");
