var Modeler = require("../Modeler.js");
var className = 'ElementLatestAccountingPeriodReference';

var ElementLatestAccountingPeriodReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LatestAccountingPeriodReference: {
      type: "TypeAccountingPeriodReferenceType",
      wsdlDefinition: {
        name: "LatestAccountingPeriodReference",
        type: "AccountingPeriodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the latest accounting period of a transaction such as a payment"
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
	  LatestAccountingPeriodReference: {
      type: "TypeAccountingPeriodReferenceType",
      wsdlDefinition: {
        name: "LatestAccountingPeriodReference",
        type: "AccountingPeriodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the latest accounting period of a transaction such as a payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLatestAccountingPeriodReference;
Modeler.register(ElementLatestAccountingPeriodReference, "ElementLatestAccountingPeriodReference");
