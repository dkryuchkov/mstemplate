var Modeler = require("../Modeler.js");
var className = 'TypeCustomBatchProductionOrderReferenceType';

var TypeCustomBatchProductionOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBatchProductionOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBatchProductionOrderReferenceType",
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
	  CustomBatchProductionOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBatchProductionOrderReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBatchProductionOrderReferenceType;
Modeler.register(TypeCustomBatchProductionOrderReferenceType, "TypeCustomBatchProductionOrderReferenceType");
