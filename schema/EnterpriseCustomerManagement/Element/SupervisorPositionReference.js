var Modeler = require("../Modeler.js");
var className = 'ElementSupervisorPositionReference';

var ElementSupervisorPositionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SupervisorPositionReference: {
      type: "TypePositionReferenceType",
      wsdlDefinition: {
        name: "SupervisorPositionReference",
        type: "PositionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the position of an operational manager to whom another position reports, i.e., this other position has a dotted-line or matrix reporting relationship"
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
	  SupervisorPositionReference: {
      type: "TypePositionReferenceType",
      wsdlDefinition: {
        name: "SupervisorPositionReference",
        type: "PositionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the position of an operational manager to whom another position reports, i.e., this other position has a dotted-line or matrix reporting relationship"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSupervisorPositionReference;
Modeler.register(ElementSupervisorPositionReference, "ElementSupervisorPositionReference");
