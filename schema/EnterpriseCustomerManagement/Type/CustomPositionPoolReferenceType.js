var Modeler = require("../Modeler.js");
var className = 'TypeCustomPositionPoolReferenceType';

var TypeCustomPositionPoolReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPositionPoolReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPositionPoolReferenceType",
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
	  CustomPositionPoolReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPositionPoolReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPositionPoolReferenceType;
Modeler.register(TypeCustomPositionPoolReferenceType, "TypeCustomPositionPoolReferenceType");
