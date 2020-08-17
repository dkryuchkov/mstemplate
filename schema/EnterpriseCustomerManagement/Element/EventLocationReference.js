var Modeler = require("../Modeler.js");
var className = 'ElementEventLocationReference';

var ElementEventLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EventLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "EventLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a location  where this event takes place"
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
	  EventLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "EventLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a location  where this event takes place"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEventLocationReference;
Modeler.register(ElementEventLocationReference, "ElementEventLocationReference");
