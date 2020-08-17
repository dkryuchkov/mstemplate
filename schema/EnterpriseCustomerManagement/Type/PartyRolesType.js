var Modeler = require("../Modeler.js");
var className = 'TypePartyRolesType';

var TypePartyRolesType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartyRole: {
      type: "TypePartyRoleType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:PartyRole",
        type: "PartyRoleType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  PartyRole: {
      type: "TypePartyRoleType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:PartyRole",
        type: "PartyRoleType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePartyRolesType;
Modeler.register(TypePartyRolesType, "TypePartyRolesType");
