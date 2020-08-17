var Modeler = require("../Modeler.js");
var className = 'ElementPositionReference';

var ElementPositionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PositionReference: {
      type: "TypePositionReferenceType",
      wsdlDefinition: {
        name: "PositionReference",
        type: "PositionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a position in an enterprise\n ."
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
	  PositionReference: {
      type: "TypePositionReferenceType",
      wsdlDefinition: {
        name: "PositionReference",
        type: "PositionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a position in an enterprise\n ."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPositionReference;
Modeler.register(ElementPositionReference, "ElementPositionReference");
