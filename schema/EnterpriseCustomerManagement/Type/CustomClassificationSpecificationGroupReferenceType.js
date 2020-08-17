var Modeler = require("../Modeler.js");
var className = 'TypeCustomClassificationSpecificationGroupReferenceType';

var TypeCustomClassificationSpecificationGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomClassificationSpecificationGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomClassificationSpecificationGroupReferenceType",
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
	  CustomClassificationSpecificationGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomClassificationSpecificationGroupReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomClassificationSpecificationGroupReferenceType;
Modeler.register(TypeCustomClassificationSpecificationGroupReferenceType, "TypeCustomClassificationSpecificationGroupReferenceType");
