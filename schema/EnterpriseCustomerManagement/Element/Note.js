var Modeler = require("../Modeler.js");
var className = 'ElementNote';

var ElementNote = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        name: "Note",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "A free form note used to capture instructions or information about an object or a transaction"
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
	  Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        name: "Note",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "A free form note used to capture instructions or information about an object or a transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementNote;
Modeler.register(ElementNote, "ElementNote");
