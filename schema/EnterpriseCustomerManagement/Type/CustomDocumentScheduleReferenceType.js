var Modeler = require("../Modeler.js");
var className = 'TypeCustomDocumentScheduleReferenceType';

var TypeCustomDocumentScheduleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDocumentScheduleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentScheduleReferenceType",
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
	  CustomDocumentScheduleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentScheduleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDocumentScheduleReferenceType;
Modeler.register(TypeCustomDocumentScheduleReferenceType, "TypeCustomDocumentScheduleReferenceType");
