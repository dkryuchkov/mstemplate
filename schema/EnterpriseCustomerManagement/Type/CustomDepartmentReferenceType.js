var Modeler = require("../Modeler.js");
var className = 'TypeCustomDepartmentReferenceType';

var TypeCustomDepartmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDepartmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDepartmentReferenceType",
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
	  CustomDepartmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDepartmentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDepartmentReferenceType;
Modeler.register(TypeCustomDepartmentReferenceType, "TypeCustomDepartmentReferenceType");
