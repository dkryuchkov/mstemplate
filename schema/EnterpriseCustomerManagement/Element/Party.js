var Modeler = require("../Modeler.js");
var className = 'ElementParty';

var ElementParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Party: {
      type: "TypePartyType",
      wsdlDefinition: {
        name: "Party",
        type: "PartyType",
        "xsd:annotation": {
          "xsd:documentation": "A Party is an organization, individual or group that plays different roles such as supplier, customer, BillTo etc in transactions"
        },
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
	  Party: {
      type: "TypePartyType",
      wsdlDefinition: {
        name: "Party",
        type: "PartyType",
        "xsd:annotation": {
          "xsd:documentation": "A Party is an organization, individual or group that plays different roles such as supplier, customer, BillTo etc in transactions"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParty;
Modeler.register(ElementParty, "ElementParty");
