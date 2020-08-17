var Modeler = require("../Modeler.js");
var className = 'ElementServiceCreditCalculationGroupReference';

var ElementServiceCreditCalculationGroupReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceCreditCalculationGroupReference: {
      type: "TypeServiceCreditCalculationGroupReferenceType",
      wsdlDefinition: {
        name: "ServiceCreditCalculationGroupReference",
        type: "ServiceCreditCalculationGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Service Credit Calculation Group object. To accrue service credits, a worker must be assigned to a calculation group. It has information about how service credits should be calculated."
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
	  ServiceCreditCalculationGroupReference: {
      type: "TypeServiceCreditCalculationGroupReferenceType",
      wsdlDefinition: {
        name: "ServiceCreditCalculationGroupReference",
        type: "ServiceCreditCalculationGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Service Credit Calculation Group object. To accrue service credits, a worker must be assigned to a calculation group. It has information about how service credits should be calculated."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceCreditCalculationGroupReference;
Modeler.register(ElementServiceCreditCalculationGroupReference, "ElementServiceCreditCalculationGroupReference");
