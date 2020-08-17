var Modeler = require("../Modeler.js");
var className = 'ElementRequisitionLineReference';

var ElementRequisitionLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequisitionLineReference: {
      type: "TypeRequisitionLineReferenceType",
      wsdlDefinition: {
        name: "RequisitionLineReference",
        type: "RequisitionLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line on a requisition"
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
	  RequisitionLineReference: {
      type: "TypeRequisitionLineReferenceType",
      wsdlDefinition: {
        name: "RequisitionLineReference",
        type: "RequisitionLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line on a requisition"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequisitionLineReference;
Modeler.register(ElementRequisitionLineReference, "ElementRequisitionLineReference");
