var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemReferenceType';

var TypeCustomItemReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemReferenceType",
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
	  CustomItemReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemReferenceType;
Modeler.register(TypeCustomItemReferenceType, "TypeCustomItemReferenceType");
