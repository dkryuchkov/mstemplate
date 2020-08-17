var Modeler = require("../Modeler.js");
var className = 'ElementPartyLocation';

var ElementPartyLocation = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyLocation: {
      type: "TypePartyLocationType",
      wsdlDefinition: {
        name: "PartyLocation",
        type: "PartyLocationType",
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
	  PartyLocation: {
      type: "TypePartyLocationType",
      wsdlDefinition: {
        name: "PartyLocation",
        type: "PartyLocationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyLocation;
Modeler.register(ElementPartyLocation, "ElementPartyLocation");
