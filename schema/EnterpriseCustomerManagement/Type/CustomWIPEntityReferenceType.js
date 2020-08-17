var Modeler = require("../Modeler.js");
var className = 'TypeCustomWIPEntityReferenceType';

var TypeCustomWIPEntityReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomWIPEntityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWIPEntityReferenceType",
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
	  CustomWIPEntityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWIPEntityReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomWIPEntityReferenceType;
Modeler.register(TypeCustomWIPEntityReferenceType, "TypeCustomWIPEntityReferenceType");
