var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemPublicationReferenceType';

var TypeCustomItemPublicationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemPublicationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemPublicationReferenceType",
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
	  CustomItemPublicationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemPublicationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemPublicationReferenceType;
Modeler.register(TypeCustomItemPublicationReferenceType, "TypeCustomItemPublicationReferenceType");
