var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemInstanceReferenceType';

var TypeCustomItemInstanceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemInstanceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemInstanceReferenceType",
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
	  CustomItemInstanceReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemInstanceReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemInstanceReferenceType;
Modeler.register(TypeCustomItemInstanceReferenceType, "TypeCustomItemInstanceReferenceType");
