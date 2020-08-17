var Modeler = require("../Modeler.js");
var className = 'TypeCustomProductionOrderOperationReferenceType';

var TypeCustomProductionOrderOperationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomProductionOrderOperationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProductionOrderOperationReferenceType",
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
	  CustomProductionOrderOperationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProductionOrderOperationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomProductionOrderOperationReferenceType;
Modeler.register(TypeCustomProductionOrderOperationReferenceType, "TypeCustomProductionOrderOperationReferenceType");
