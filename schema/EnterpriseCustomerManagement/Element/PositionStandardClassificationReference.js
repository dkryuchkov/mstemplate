var Modeler = require("../Modeler.js");
var className = 'ElementPositionStandardClassificationReference';

var ElementPositionStandardClassificationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PositionStandardClassificationReference: {
      type: "TypePositionStandardClassificationReferenceType",
      wsdlDefinition: {
        name: "PositionStandardClassificationReference",
        type: "PositionStandardClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Position Classification Standard object. Position classification standards is a scheme instituted by the US Federal Government. It provides information used in determining the occupational series and title for positions performing white collar work."
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
	  PositionStandardClassificationReference: {
      type: "TypePositionStandardClassificationReferenceType",
      wsdlDefinition: {
        name: "PositionStandardClassificationReference",
        type: "PositionStandardClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Position Classification Standard object. Position classification standards is a scheme instituted by the US Federal Government. It provides information used in determining the occupational series and title for positions performing white collar work."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPositionStandardClassificationReference;
Modeler.register(ElementPositionStandardClassificationReference, "ElementPositionStandardClassificationReference");
