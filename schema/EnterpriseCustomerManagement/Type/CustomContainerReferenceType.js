var Modeler = require("../Modeler.js");
var className = 'TypeCustomContainerReferenceType';

var TypeCustomContainerReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomContainerReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContainerReferenceType",
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
	  CustomContainerReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContainerReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomContainerReferenceType;
Modeler.register(TypeCustomContainerReferenceType, "TypeCustomContainerReferenceType");
