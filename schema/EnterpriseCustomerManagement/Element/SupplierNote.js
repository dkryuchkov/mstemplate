var Modeler = require("../Modeler.js");
var className = 'ElementSupplierNote';

var ElementSupplierNote = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupplierNote: {
      type: "TypeNoteType",
      wsdlDefinition: {
        name: "SupplierNote",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "A Note to a Buyer in a purchasing organization that is typically entered by a Requester on a Requisition"
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
	  SupplierNote: {
      type: "TypeNoteType",
      wsdlDefinition: {
        name: "SupplierNote",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "A Note to a Buyer in a purchasing organization that is typically entered by a Requester on a Requisition"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupplierNote;
Modeler.register(ElementSupplierNote, "ElementSupplierNote");
