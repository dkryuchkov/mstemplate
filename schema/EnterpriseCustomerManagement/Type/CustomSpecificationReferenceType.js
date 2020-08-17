var Modeler = require("../Modeler.js");
var className = 'TypeCustomSpecificationReferenceType';

var TypeCustomSpecificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSpecificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationReferenceType",
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
	  CustomSpecificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSpecificationReferenceType;
Modeler.register(TypeCustomSpecificationReferenceType, "TypeCustomSpecificationReferenceType");
