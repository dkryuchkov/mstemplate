var Modeler = require("../Modeler.js");
var className = 'ElementPositionPoolReference';

var ElementPositionPoolReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PositionPoolReference: {
      type: "TypePositionPoolReferenceType",
      wsdlDefinition: {
        name: "PositionPoolReference",
        type: "PositionPoolReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the position pool to which this position belongs. Budgeting for positions belonging to a position pool are done at the position pool level."
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
	  PositionPoolReference: {
      type: "TypePositionPoolReferenceType",
      wsdlDefinition: {
        name: "PositionPoolReference",
        type: "PositionPoolReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the position pool to which this position belongs. Budgeting for positions belonging to a position pool are done at the position pool level."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPositionPoolReference;
Modeler.register(ElementPositionPoolReference, "ElementPositionPoolReference");
