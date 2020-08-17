var Modeler = require("../Modeler.js");
var className = 'ElementFreightNote';

var ElementFreightNote = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FreightNote: {
      type: "TypeNoteType",
      wsdlDefinition: {
        name: "FreightNote",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "A Note used to provide additional information regarding the  Freight Terms on a document"
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
	  FreightNote: {
      type: "TypeNoteType",
      wsdlDefinition: {
        name: "FreightNote",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "A Note used to provide additional information regarding the  Freight Terms on a document"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFreightNote;
Modeler.register(ElementFreightNote, "ElementFreightNote");
