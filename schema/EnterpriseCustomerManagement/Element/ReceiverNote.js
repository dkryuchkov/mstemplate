var Modeler = require("../Modeler.js");
var className = 'ElementReceiverNote';

var ElementReceiverNote = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceiverNote: {
      type: "TypeNoteType",
      wsdlDefinition: {
        name: "ReceiverNote",
        type: "NoteType",
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
	  ReceiverNote: {
      type: "TypeNoteType",
      wsdlDefinition: {
        name: "ReceiverNote",
        type: "NoteType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReceiverNote;
Modeler.register(ElementReceiverNote, "ElementReceiverNote");
