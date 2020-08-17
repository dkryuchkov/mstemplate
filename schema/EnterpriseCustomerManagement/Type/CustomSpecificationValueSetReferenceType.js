var Modeler = require("../Modeler.js");
var className = 'TypeCustomSpecificationValueSetReferenceType';

var TypeCustomSpecificationValueSetReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSpecificationValueSetReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationValueSetReferenceType",
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
	  CustomSpecificationValueSetReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSpecificationValueSetReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSpecificationValueSetReferenceType;
Modeler.register(TypeCustomSpecificationValueSetReferenceType, "TypeCustomSpecificationValueSetReferenceType");
