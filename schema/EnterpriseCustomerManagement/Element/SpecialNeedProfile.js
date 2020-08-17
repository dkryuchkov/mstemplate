var Modeler = require("../Modeler.js");
var className = 'ElementSpecialNeedProfile';

var ElementSpecialNeedProfile = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecialNeedProfile: {
      type: "TypeSpecialNeedProfileType",
      wsdlDefinition: {
        name: "SpecialNeedProfile",
        type: "SpecialNeedProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Capture SpecialNeeds related to the CustomerParty."
        },
        ns: "WL5G3N1",
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
	  SpecialNeedProfile: {
      type: "TypeSpecialNeedProfileType",
      wsdlDefinition: {
        name: "SpecialNeedProfile",
        type: "SpecialNeedProfileType",
        "xsd:annotation": {
          "xsd:documentation": "Capture SpecialNeeds related to the CustomerParty."
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSpecialNeedProfile;
Modeler.register(ElementSpecialNeedProfile, "ElementSpecialNeedProfile");
