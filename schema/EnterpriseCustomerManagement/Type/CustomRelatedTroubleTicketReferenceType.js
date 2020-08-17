var Modeler = require("../Modeler.js");
var className = 'TypeCustomRelatedTroubleTicketReferenceType';

var TypeCustomRelatedTroubleTicketReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRelatedTroubleTicketReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRelatedTroubleTicketReferenceType",
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
	  CustomRelatedTroubleTicketReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRelatedTroubleTicketReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRelatedTroubleTicketReferenceType;
Modeler.register(TypeCustomRelatedTroubleTicketReferenceType, "TypeCustomRelatedTroubleTicketReferenceType");
