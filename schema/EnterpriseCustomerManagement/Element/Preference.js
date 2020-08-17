var Modeler = require("../Modeler.js");
var className = 'ElementPreference';

var ElementPreference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Preference: {
      type: "TypePreferenceType",
      wsdlDefinition: {
        name: "Preference",
        type: "PreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Precedence, advantage, or choice of one person or thing over another"
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
	  Preference: {
      type: "TypePreferenceType",
      wsdlDefinition: {
        name: "Preference",
        type: "PreferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Precedence, advantage, or choice of one person or thing over another"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPreference;
Modeler.register(ElementPreference, "ElementPreference");
