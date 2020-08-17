var Modeler = require("../Modeler.js");
var className = 'ElementPartyContact';

var ElementPartyContact = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyContact: {
      type: "TypePartyContactType",
      wsdlDefinition: {
        name: "PartyContact",
        type: "PartyContactType",
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
	  PartyContact: {
      type: "TypePartyContactType",
      wsdlDefinition: {
        name: "PartyContact",
        type: "PartyContactType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartyContact;
Modeler.register(ElementPartyContact, "ElementPartyContact");
