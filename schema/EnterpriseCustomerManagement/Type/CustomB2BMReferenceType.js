var Modeler = require("../Modeler.js");
var className = 'TypeCustomB2BMReferenceType';

var TypeCustomB2BMReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomB2BMReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomB2BMReferenceType",
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
	  CustomB2BMReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomB2BMReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomB2BMReferenceType;
Modeler.register(TypeCustomB2BMReferenceType, "TypeCustomB2BMReferenceType");
