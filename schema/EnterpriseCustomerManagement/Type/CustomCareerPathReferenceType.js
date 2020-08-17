var Modeler = require("../Modeler.js");
var className = 'TypeCustomCareerPathReferenceType';

var TypeCustomCareerPathReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCareerPathReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCareerPathReferenceType",
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
	  CustomCareerPathReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCareerPathReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCareerPathReferenceType;
Modeler.register(TypeCustomCareerPathReferenceType, "TypeCustomCareerPathReferenceType");
