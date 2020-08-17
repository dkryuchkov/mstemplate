var Modeler = require("../Modeler.js");
var className = 'TypeCustomResponsiblePartyReferenceType';

var TypeCustomResponsiblePartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomResponsiblePartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomResponsiblePartyReferenceType",
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
	  CustomResponsiblePartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomResponsiblePartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomResponsiblePartyReferenceType;
Modeler.register(TypeCustomResponsiblePartyReferenceType, "TypeCustomResponsiblePartyReferenceType");
