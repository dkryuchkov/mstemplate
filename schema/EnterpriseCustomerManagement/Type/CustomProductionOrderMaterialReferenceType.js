var Modeler = require("../Modeler.js");
var className = 'TypeCustomProductionOrderMaterialReferenceType';

var TypeCustomProductionOrderMaterialReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomProductionOrderMaterialReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProductionOrderMaterialReferenceType",
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
	  CustomProductionOrderMaterialReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProductionOrderMaterialReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomProductionOrderMaterialReferenceType;
Modeler.register(TypeCustomProductionOrderMaterialReferenceType, "TypeCustomProductionOrderMaterialReferenceType");
