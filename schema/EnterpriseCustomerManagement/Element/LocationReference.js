var Modeler = require("../Modeler.js");
var className = 'ElementLocationReference';

var ElementLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "LocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Location. A Location encapsulates the postal address and / or geographic coordinate based on a Cartesian coordinate System"
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
	  LocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "LocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Location. A Location encapsulates the postal address and / or geographic coordinate based on a Cartesian coordinate System"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLocationReference;
Modeler.register(ElementLocationReference, "ElementLocationReference");
