var Modeler = require("../Modeler.js");
var className = 'ElementAccountingPeriodReference';

var ElementAccountingPeriodReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountingPeriodReference: {
      type: "TypeAccountingPeriodReferenceType",
      wsdlDefinition: {
        name: "AccountingPeriodReference",
        type: "AccountingPeriodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Accounting period defines a period in an accounting calendar, such as January-2008 or Quarter 1. E.g., Jan-08 is a period in a calendar that represents the month of January for the 2008 year."
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
	  AccountingPeriodReference: {
      type: "TypeAccountingPeriodReferenceType",
      wsdlDefinition: {
        name: "AccountingPeriodReference",
        type: "AccountingPeriodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Accounting period defines a period in an accounting calendar, such as January-2008 or Quarter 1. E.g., Jan-08 is a period in a calendar that represents the month of January for the 2008 year."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAccountingPeriodReference;
Modeler.register(ElementAccountingPeriodReference, "ElementAccountingPeriodReference");
