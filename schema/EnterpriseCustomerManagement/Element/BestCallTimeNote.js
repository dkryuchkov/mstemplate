var Modeler = require("../Modeler.js");
var className = 'ElementBestCallTimeNote';

var ElementBestCallTimeNote = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BestCallTimeNote: {
      type: "TypeNoteType",
      wsdlDefinition: {
        name: "BestCallTimeNote",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "Best time to contact the organization"
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
	  BestCallTimeNote: {
      type: "TypeNoteType",
      wsdlDefinition: {
        name: "BestCallTimeNote",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "Best time to contact the organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBestCallTimeNote;
Modeler.register(ElementBestCallTimeNote, "ElementBestCallTimeNote");
