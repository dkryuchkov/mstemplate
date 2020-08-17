var Modeler = require("../Modeler.js");
var className = 'ElementMotherMaidenName';

var ElementMotherMaidenName = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MotherMaidenName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        name: "MotherMaidenName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "The person's mother's maiden name."
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
	  MotherMaidenName: {
      type: "TypePersonNameType",
      wsdlDefinition: {
        name: "MotherMaidenName",
        type: "PersonNameType",
        "xsd:annotation": {
          "xsd:documentation": "The person's mother's maiden name."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMotherMaidenName;
Modeler.register(ElementMotherMaidenName, "ElementMotherMaidenName");
