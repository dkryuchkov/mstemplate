var Modeler = require("../Modeler.js");
var className = 'TypeCustomWIPOperationReferenceType';

var TypeCustomWIPOperationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomWIPOperationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWIPOperationReferenceType",
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
	  CustomWIPOperationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWIPOperationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomWIPOperationReferenceType;
Modeler.register(TypeCustomWIPOperationReferenceType, "TypeCustomWIPOperationReferenceType");
