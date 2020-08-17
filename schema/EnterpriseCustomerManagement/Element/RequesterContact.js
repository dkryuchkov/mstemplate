var Modeler = require("../Modeler.js");
var className = 'ElementRequesterContact';

var ElementRequesterContact = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequesterContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "RequesterContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "A person or department that plays the role of a requestor in any business transaction"
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
	  RequesterContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        name: "RequesterContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "A person or department that plays the role of a requestor in any business transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequesterContact;
Modeler.register(ElementRequesterContact, "ElementRequesterContact");
