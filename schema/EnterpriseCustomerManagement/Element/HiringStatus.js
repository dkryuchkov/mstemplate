var Modeler = require("../Modeler.js");
var className = 'ElementHiringStatus';

var ElementHiringStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  HiringStatus: {
      type: "TypeHiringStatusType",
      wsdlDefinition: {
        name: "HiringStatus",
        type: "HiringStatusType",
        "xsd:annotation": {
          "xsd:documentation": "Current hiring status, e.g., current hiring status of a position (Approved, Frozen, Proposed)"
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
	  HiringStatus: {
      type: "TypeHiringStatusType",
      wsdlDefinition: {
        name: "HiringStatus",
        type: "HiringStatusType",
        "xsd:annotation": {
          "xsd:documentation": "Current hiring status, e.g., current hiring status of a position (Approved, Frozen, Proposed)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementHiringStatus;
Modeler.register(ElementHiringStatus, "ElementHiringStatus");
