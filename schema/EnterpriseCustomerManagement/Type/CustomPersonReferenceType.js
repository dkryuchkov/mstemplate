var Modeler = require("../Modeler.js");
var className = 'TypeCustomPersonReferenceType';

var TypeCustomPersonReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPersonReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonReferenceType",
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
	  CustomPersonReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPersonReferenceType;
Modeler.register(TypeCustomPersonReferenceType, "TypeCustomPersonReferenceType");
