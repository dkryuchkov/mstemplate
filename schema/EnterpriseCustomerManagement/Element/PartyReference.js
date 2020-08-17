var Modeler = require("../Modeler.js");
var className = 'ElementPartyReference';

var ElementPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyReference: {
      type: "TypePartyReferenceType",
      wsdlDefinition: {
        name: "PartyReference",
        type: "PartyReferenceType",
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
	  PartyReference: {
      type: "TypePartyReferenceType",
      wsdlDefinition: {
        name: "PartyReference",
        type: "PartyReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyReference;
Modeler.register(ElementPartyReference, "ElementPartyReference");
