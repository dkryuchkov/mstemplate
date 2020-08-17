var Modeler = require("../Modeler.js");
var className = 'ElementRequisitionDistributionIdentification';

var ElementRequisitionDistributionIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequisitionDistributionIdentification: {
      type: "TypeRequisitionDistributionIdentificationType",
      wsdlDefinition: {
        name: "RequisitionDistributionIdentification",
        type: "RequisitionDistributionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Requisition Distribution"
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
	  RequisitionDistributionIdentification: {
      type: "TypeRequisitionDistributionIdentificationType",
      wsdlDefinition: {
        name: "RequisitionDistributionIdentification",
        type: "RequisitionDistributionIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Requisition Distribution"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequisitionDistributionIdentification;
Modeler.register(ElementRequisitionDistributionIdentification, "ElementRequisitionDistributionIdentification");
