var Modeler = require("../Modeler.js");
var className = 'TypeCustomWIPOperationResourceReferenceType';

var TypeCustomWIPOperationResourceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomWIPOperationResourceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWIPOperationResourceReferenceType",
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
	  CustomWIPOperationResourceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWIPOperationResourceReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomWIPOperationResourceReferenceType;
Modeler.register(TypeCustomWIPOperationResourceReferenceType, "TypeCustomWIPOperationResourceReferenceType");
