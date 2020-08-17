var Modeler = require("../Modeler.js");
var className = 'ElementSignatureNote';

var ElementSignatureNote = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SignatureNote: {
      type: "TypeSignatureNoteType",
      wsdlDefinition: {
        name: "SignatureNote",
        type: "SignatureNoteType",
        "xsd:annotation": {
          "xsd:documentation": "A free form note used to capture information about a signature of a person."
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
	  SignatureNote: {
      type: "TypeSignatureNoteType",
      wsdlDefinition: {
        name: "SignatureNote",
        type: "SignatureNoteType",
        "xsd:annotation": {
          "xsd:documentation": "A free form note used to capture information about a signature of a person."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSignatureNote;
Modeler.register(ElementSignatureNote, "ElementSignatureNote");
