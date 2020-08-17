var Modeler = require("../Modeler.js");
var className = 'ElementPrimaryLocationReference';

var ElementPrimaryLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrimaryLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "PrimaryLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the Primary Location"
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
	  PrimaryLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "PrimaryLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the Primary Location"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrimaryLocationReference;
Modeler.register(ElementPrimaryLocationReference, "ElementPrimaryLocationReference");
