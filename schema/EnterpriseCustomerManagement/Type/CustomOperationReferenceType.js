var Modeler = require("../Modeler.js");
var className = 'TypeCustomOperationReferenceType';

var TypeCustomOperationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomOperationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOperationReferenceType",
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
	  CustomOperationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOperationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOperationReferenceType;
Modeler.register(TypeCustomOperationReferenceType, "TypeCustomOperationReferenceType");
