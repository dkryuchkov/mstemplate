var Modeler = require("../Modeler.js");
var className = 'TypeCustomParticipatingPartyReferenceType';

var TypeCustomParticipatingPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomParticipatingPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomParticipatingPartyReferenceType",
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
	  CustomParticipatingPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomParticipatingPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomParticipatingPartyReferenceType;
Modeler.register(TypeCustomParticipatingPartyReferenceType, "TypeCustomParticipatingPartyReferenceType");
