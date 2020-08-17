var Modeler = require("../Modeler.js");
var className = 'ElementActivityReference';

var ElementActivityReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ActivityReference: {
      type: "TypeActivityReferenceType",
      wsdlDefinition: {
        name: "ActivityReference",
        type: "ActivityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a activity to be performed"
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
	  ActivityReference: {
      type: "TypeActivityReferenceType",
      wsdlDefinition: {
        name: "ActivityReference",
        type: "ActivityReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a activity to be performed"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementActivityReference;
Modeler.register(ElementActivityReference, "ElementActivityReference");
