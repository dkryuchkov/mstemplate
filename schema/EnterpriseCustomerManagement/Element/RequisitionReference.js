var Modeler = require("../Modeler.js");
var className = 'ElementRequisitionReference';

var ElementRequisitionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequisitionReference: {
      type: "TypeRequisitionReferenceType",
      wsdlDefinition: {
        name: "RequisitionReference",
        type: "RequisitionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a requisiton"
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
	  RequisitionReference: {
      type: "TypeRequisitionReferenceType",
      wsdlDefinition: {
        name: "RequisitionReference",
        type: "RequisitionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a requisiton"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequisitionReference;
Modeler.register(ElementRequisitionReference, "ElementRequisitionReference");
