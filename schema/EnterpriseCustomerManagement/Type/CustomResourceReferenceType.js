var Modeler = require("../Modeler.js");
var className = 'TypeCustomResourceReferenceType';

var TypeCustomResourceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomResourceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomResourceReferenceType",
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
	  CustomResourceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomResourceReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomResourceReferenceType;
Modeler.register(TypeCustomResourceReferenceType, "TypeCustomResourceReferenceType");
