var Modeler = require("../Modeler.js");
var className = 'TypeCustomSpecificationGroupReferenceType';

var TypeCustomSpecificationGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSpecificationGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationGroupReferenceType",
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
	  CustomSpecificationGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationGroupReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSpecificationGroupReferenceType;
Modeler.register(TypeCustomSpecificationGroupReferenceType, "TypeCustomSpecificationGroupReferenceType");
