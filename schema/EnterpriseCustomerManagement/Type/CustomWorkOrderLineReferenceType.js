var Modeler = require("../Modeler.js");
var className = 'TypeCustomWorkOrderLineReferenceType';

var TypeCustomWorkOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomWorkOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWorkOrderLineReferenceType",
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
	  CustomWorkOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWorkOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomWorkOrderLineReferenceType;
Modeler.register(TypeCustomWorkOrderLineReferenceType, "TypeCustomWorkOrderLineReferenceType");
