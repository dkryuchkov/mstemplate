var Modeler = require("../Modeler.js");
var className = 'TypeCustomObjectReferenceType';

var TypeCustomObjectReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomObjectReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomObjectReferenceType",
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
	  CustomObjectReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomObjectReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomObjectReferenceType;
Modeler.register(TypeCustomObjectReferenceType, "TypeCustomObjectReferenceType");
