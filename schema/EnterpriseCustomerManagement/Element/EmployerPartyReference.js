var Modeler = require("../Modeler.js");
var className = 'ElementEmployerPartyReference';

var ElementEmployerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmployerPartyReference: {
      type: "TypeEmployerPartyReferenceType",
      wsdlDefinition: {
        name: "EmployerPartyReference",
        type: "EmployerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A person or firm that employs individuals to work on their behalf"
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
	  EmployerPartyReference: {
      type: "TypeEmployerPartyReferenceType",
      wsdlDefinition: {
        name: "EmployerPartyReference",
        type: "EmployerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A person or firm that employs individuals to work on their behalf"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEmployerPartyReference;
Modeler.register(ElementEmployerPartyReference, "ElementEmployerPartyReference");
