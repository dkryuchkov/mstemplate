var Modeler = require("../Modeler.js");
var className = 'ElementLanguageProficiency';

var ElementLanguageProficiency = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LanguageProficiency: {
      type: "TypeLanguageProficiencyType",
      wsdlDefinition: {
        name: "LanguageProficiency",
        type: "LanguageProficiencyType",
        "xsd:annotation": {
          "xsd:documentation": "Languages known to a person"
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
	  LanguageProficiency: {
      type: "TypeLanguageProficiencyType",
      wsdlDefinition: {
        name: "LanguageProficiency",
        type: "LanguageProficiencyType",
        "xsd:annotation": {
          "xsd:documentation": "Languages known to a person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLanguageProficiency;
Modeler.register(ElementLanguageProficiency, "ElementLanguageProficiency");
