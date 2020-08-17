var Modeler = require("../Modeler.js");
var className = 'TypeCustomPositionReferenceType';

var TypeCustomPositionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPositionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPositionReferenceType",
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
	  CustomPositionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPositionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPositionReferenceType;
Modeler.register(TypeCustomPositionReferenceType, "TypeCustomPositionReferenceType");
