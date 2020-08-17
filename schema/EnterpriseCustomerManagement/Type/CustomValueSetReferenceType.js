var Modeler = require("../Modeler.js");
var className = 'TypeCustomValueSetReferenceType';

var TypeCustomValueSetReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomValueSetReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomValueSetReferenceType",
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
	  CustomValueSetReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomValueSetReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomValueSetReferenceType;
Modeler.register(TypeCustomValueSetReferenceType, "TypeCustomValueSetReferenceType");
