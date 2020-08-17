var Modeler = require("../Modeler.js");
var className = 'ElementRequisitionDistributionReference';

var ElementRequisitionDistributionReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequisitionDistributionReference: {
      type: "TypeRequisitionDistributionReferenceType",
      wsdlDefinition: {
        name: "RequisitionDistributionReference",
        type: "RequisitionDistributionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an accounting distribution line on a requisition"
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
	  RequisitionDistributionReference: {
      type: "TypeRequisitionDistributionReferenceType",
      wsdlDefinition: {
        name: "RequisitionDistributionReference",
        type: "RequisitionDistributionReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an accounting distribution line on a requisition"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequisitionDistributionReference;
Modeler.register(ElementRequisitionDistributionReference, "ElementRequisitionDistributionReference");
