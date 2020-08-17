var Modeler = require("../Modeler.js");
var className = 'ElementParticipatingPartyReference';

var ElementParticipatingPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParticipatingPartyReference: {
      type: "TypeParticipatingPartyReferenceType",
      wsdlDefinition: {
        name: "ParticipatingPartyReference",
        type: "ParticipatingPartyReferenceType",
        ns: "WL5G3N2",
        attribute: false
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
	  ParticipatingPartyReference: {
      type: "TypeParticipatingPartyReferenceType",
      wsdlDefinition: {
        name: "ParticipatingPartyReference",
        type: "ParticipatingPartyReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParticipatingPartyReference;
Modeler.register(ElementParticipatingPartyReference, "ElementParticipatingPartyReference");
