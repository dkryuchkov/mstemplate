var Modeler = require("../Modeler.js");
var className = 'TypeCustomWorkerUnionReferenceType';

var TypeCustomWorkerUnionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomWorkerUnionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWorkerUnionReferenceType",
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
	  CustomWorkerUnionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWorkerUnionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomWorkerUnionReferenceType;
Modeler.register(TypeCustomWorkerUnionReferenceType, "TypeCustomWorkerUnionReferenceType");
