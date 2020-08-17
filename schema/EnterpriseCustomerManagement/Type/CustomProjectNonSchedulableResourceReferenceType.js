var Modeler = require("../Modeler.js");
var className = 'TypeCustomProjectNonSchedulableResourceReferenceType';

var TypeCustomProjectNonSchedulableResourceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomProjectNonSchedulableResourceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProjectNonSchedulableResourceReferenceType",
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
	  CustomProjectNonSchedulableResourceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProjectNonSchedulableResourceReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomProjectNonSchedulableResourceReferenceType;
Modeler.register(TypeCustomProjectNonSchedulableResourceReferenceType, "TypeCustomProjectNonSchedulableResourceReferenceType");
