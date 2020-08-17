var Modeler = require("../Modeler.js");
var className = 'ElementDependentPersonParty';

var ElementDependentPersonParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DependentPersonParty: {
      type: "TypeDependentPersonPartyType",
      wsdlDefinition: {
        name: "DependentPersonParty",
        type: "DependentPersonPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a dependent who is a individual"
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
	  DependentPersonParty: {
      type: "TypeDependentPersonPartyType",
      wsdlDefinition: {
        name: "DependentPersonParty",
        type: "DependentPersonPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a dependent who is a individual"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDependentPersonParty;
Modeler.register(ElementDependentPersonParty, "ElementDependentPersonParty");
