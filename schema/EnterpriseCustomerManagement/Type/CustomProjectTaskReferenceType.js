var Modeler = require("../Modeler.js");
var className = 'TypeCustomProjectTaskReferenceType';

var TypeCustomProjectTaskReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomProjectTaskReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProjectTaskReferenceType",
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
	  CustomProjectTaskReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomProjectTaskReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomProjectTaskReferenceType;
Modeler.register(TypeCustomProjectTaskReferenceType, "TypeCustomProjectTaskReferenceType");
