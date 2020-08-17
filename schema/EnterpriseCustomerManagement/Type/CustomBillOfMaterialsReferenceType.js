var Modeler = require("../Modeler.js");
var className = 'TypeCustomBillOfMaterialsReferenceType';

var TypeCustomBillOfMaterialsReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBillOfMaterialsReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillOfMaterialsReferenceType",
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
	  CustomBillOfMaterialsReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBillOfMaterialsReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBillOfMaterialsReferenceType;
Modeler.register(TypeCustomBillOfMaterialsReferenceType, "TypeCustomBillOfMaterialsReferenceType");
