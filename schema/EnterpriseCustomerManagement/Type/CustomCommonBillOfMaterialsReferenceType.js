var Modeler = require("../Modeler.js");
var className = 'TypeCustomCommonBillOfMaterialsReferenceType';

var TypeCustomCommonBillOfMaterialsReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCommonBillOfMaterialsReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCommonBillOfMaterialsReferenceType",
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
	  CustomCommonBillOfMaterialsReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCommonBillOfMaterialsReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCommonBillOfMaterialsReferenceType;
Modeler.register(TypeCustomCommonBillOfMaterialsReferenceType, "TypeCustomCommonBillOfMaterialsReferenceType");
