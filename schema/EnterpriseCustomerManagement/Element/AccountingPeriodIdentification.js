var Modeler = require("../Modeler.js");
var className = 'ElementAccountingPeriodIdentification';

var ElementAccountingPeriodIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountingPeriodIdentification: {
      type: "TypeAccountingPeriodIdentificationType",
      wsdlDefinition: {
        name: "AccountingPeriodIdentification",
        type: "AccountingPeriodIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Accounting Period"
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
	  AccountingPeriodIdentification: {
      type: "TypeAccountingPeriodIdentificationType",
      wsdlDefinition: {
        name: "AccountingPeriodIdentification",
        type: "AccountingPeriodIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Accounting Period"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAccountingPeriodIdentification;
Modeler.register(ElementAccountingPeriodIdentification, "ElementAccountingPeriodIdentification");
