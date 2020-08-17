var Modeler = require("../Modeler.js");
var className = 'TypeCustomPositionStandardClassificationReferenceType';

var TypeCustomPositionStandardClassificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPositionStandardClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPositionStandardClassificationReferenceType",
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
	  CustomPositionStandardClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPositionStandardClassificationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPositionStandardClassificationReferenceType;
Modeler.register(TypeCustomPositionStandardClassificationReferenceType, "TypeCustomPositionStandardClassificationReferenceType");
