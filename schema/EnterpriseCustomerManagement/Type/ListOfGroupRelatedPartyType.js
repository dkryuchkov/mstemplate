var Modeler = require("../Modeler.js");
var className = 'TypeListOfGroupRelatedPartyType';

var TypeListOfGroupRelatedPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  GroupRelatedParty: {
      type: "TypeGroupRelatedPartyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:GroupRelatedParty",
        type: "GroupRelatedPartyType",
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
	  GroupRelatedParty: {
      type: "TypeGroupRelatedPartyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "corecustomerpartycust:GroupRelatedParty",
        type: "GroupRelatedPartyType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeListOfGroupRelatedPartyType;
Modeler.register(TypeListOfGroupRelatedPartyType, "TypeListOfGroupRelatedPartyType");
