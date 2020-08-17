var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemPublicationLineReferenceType';

var TypeCustomItemPublicationLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemPublicationLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemPublicationLineReferenceType",
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
	  CustomItemPublicationLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemPublicationLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemPublicationLineReferenceType;
Modeler.register(TypeCustomItemPublicationLineReferenceType, "TypeCustomItemPublicationLineReferenceType");
