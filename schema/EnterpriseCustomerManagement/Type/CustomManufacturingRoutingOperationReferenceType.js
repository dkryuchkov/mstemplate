var Modeler = require("../Modeler.js");
var className = 'TypeCustomManufacturingRoutingOperationReferenceType';

var TypeCustomManufacturingRoutingOperationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomManufacturingRoutingOperationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomManufacturingRoutingOperationReferenceType",
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
	  CustomManufacturingRoutingOperationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomManufacturingRoutingOperationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomManufacturingRoutingOperationReferenceType;
Modeler.register(TypeCustomManufacturingRoutingOperationReferenceType, "TypeCustomManufacturingRoutingOperationReferenceType");
