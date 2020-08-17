var Modeler = require("../Modeler.js");
var className = 'TypeCustomEmploymentAssignmentReferenceType';

var TypeCustomEmploymentAssignmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEmploymentAssignmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEmploymentAssignmentReferenceType",
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
	  CustomEmploymentAssignmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEmploymentAssignmentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEmploymentAssignmentReferenceType;
Modeler.register(TypeCustomEmploymentAssignmentReferenceType, "TypeCustomEmploymentAssignmentReferenceType");
