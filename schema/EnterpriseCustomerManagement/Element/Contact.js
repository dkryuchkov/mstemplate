var Modeler = require("../Modeler.js");
var className = 'ElementContact';

var ElementContact = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Contact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "Contact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "A person or department that acts as a point of contact with another person or department"
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
	  Contact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "Contact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "A person or department that acts as a point of contact with another person or department"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContact;
Modeler.register(ElementContact, "ElementContact");
