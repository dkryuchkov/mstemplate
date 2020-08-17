var Modeler = require("../Modeler.js");
var className = 'TypeCustomBillOfMaterialsComponentItemReferenceType';

var TypeCustomBillOfMaterialsComponentItemReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBillOfMaterialsComponentItemReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillOfMaterialsComponentItemReferenceType",
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
	  CustomBillOfMaterialsComponentItemReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillOfMaterialsComponentItemReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBillOfMaterialsComponentItemReferenceType;
Modeler.register(TypeCustomBillOfMaterialsComponentItemReferenceType, "TypeCustomBillOfMaterialsComponentItemReferenceType");
