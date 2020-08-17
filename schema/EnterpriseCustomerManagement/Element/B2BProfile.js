var Modeler = require("../Modeler.js");
var className = 'ElementB2BProfile';

var ElementB2BProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  B2BProfile: {
      type: "TypeB2BProfileType",
      wsdlDefinition: {
        name: "B2BProfile",
        type: "B2BProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Element containing the sending and receiving trading partner information for the B2B document flow"
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
	  B2BProfile: {
      type: "TypeB2BProfileType",
      wsdlDefinition: {
        name: "B2BProfile",
        type: "B2BProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Element containing the sending and receiving trading partner information for the B2B document flow"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementB2BProfile;
Modeler.register(ElementB2BProfile, "ElementB2BProfile");
