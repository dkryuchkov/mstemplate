var Modeler = require("../Modeler.js");
var className = 'TypeCustomProductionOrderReferenceType';

var TypeCustomProductionOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomProductionOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProductionOrderReferenceType",
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
	  CustomProductionOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProductionOrderReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomProductionOrderReferenceType;
Modeler.register(TypeCustomProductionOrderReferenceType, "TypeCustomProductionOrderReferenceType");
