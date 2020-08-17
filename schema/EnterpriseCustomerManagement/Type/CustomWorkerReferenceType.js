var Modeler = require("../Modeler.js");
var className = 'TypeCustomWorkerReferenceType';

var TypeCustomWorkerReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomWorkerReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWorkerReferenceType",
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
	  CustomWorkerReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWorkerReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomWorkerReferenceType;
Modeler.register(TypeCustomWorkerReferenceType, "TypeCustomWorkerReferenceType");
