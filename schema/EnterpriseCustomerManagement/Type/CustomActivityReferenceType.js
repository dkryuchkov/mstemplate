var Modeler = require("../Modeler.js");
var className = 'TypeCustomActivityReferenceType';

var TypeCustomActivityReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomActivityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomActivityReferenceType",
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
	  CustomActivityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomActivityReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomActivityReferenceType;
Modeler.register(TypeCustomActivityReferenceType, "TypeCustomActivityReferenceType");
