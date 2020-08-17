var Modeler = require("../Modeler.js");
var className = 'TypeCustomProductionOrderActivityReferenceType';

var TypeCustomProductionOrderActivityReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomProductionOrderActivityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProductionOrderActivityReferenceType",
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
	  CustomProductionOrderActivityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProductionOrderActivityReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomProductionOrderActivityReferenceType;
Modeler.register(TypeCustomProductionOrderActivityReferenceType, "TypeCustomProductionOrderActivityReferenceType");
