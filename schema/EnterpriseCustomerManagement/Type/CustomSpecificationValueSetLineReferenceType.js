var Modeler = require("../Modeler.js");
var className = 'TypeCustomSpecificationValueSetLineReferenceType';

var TypeCustomSpecificationValueSetLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSpecificationValueSetLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationValueSetLineReferenceType",
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
	  CustomSpecificationValueSetLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationValueSetLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSpecificationValueSetLineReferenceType;
Modeler.register(TypeCustomSpecificationValueSetLineReferenceType, "TypeCustomSpecificationValueSetLineReferenceType");
