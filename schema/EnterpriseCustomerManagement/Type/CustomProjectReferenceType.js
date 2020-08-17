var Modeler = require("../Modeler.js");
var className = 'TypeCustomProjectReferenceType';

var TypeCustomProjectReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomProjectReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProjectReferenceType",
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
	  CustomProjectReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProjectReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomProjectReferenceType;
Modeler.register(TypeCustomProjectReferenceType, "TypeCustomProjectReferenceType");
