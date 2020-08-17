var Modeler = require("../Modeler.js");
var className = 'TypeCustomProjectSchedulableResourceReferenceType';

var TypeCustomProjectSchedulableResourceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomProjectSchedulableResourceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProjectSchedulableResourceReferenceType",
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
	  CustomProjectSchedulableResourceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProjectSchedulableResourceReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomProjectSchedulableResourceReferenceType;
Modeler.register(TypeCustomProjectSchedulableResourceReferenceType, "TypeCustomProjectSchedulableResourceReferenceType");
