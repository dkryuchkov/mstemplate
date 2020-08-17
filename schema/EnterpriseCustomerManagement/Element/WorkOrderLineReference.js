var Modeler = require("../Modeler.js");
var className = 'ElementWorkOrderLineReference';

var ElementWorkOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkOrderLineReference: {
      type: "TypeWorkOrderLineReferenceType",
      wsdlDefinition: {
        name: "WorkOrderLineReference",
        type: "WorkOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a work order line within a work order object"
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
	  WorkOrderLineReference: {
      type: "TypeWorkOrderLineReferenceType",
      wsdlDefinition: {
        name: "WorkOrderLineReference",
        type: "WorkOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a work order line within a work order object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkOrderLineReference;
Modeler.register(ElementWorkOrderLineReference, "ElementWorkOrderLineReference");
