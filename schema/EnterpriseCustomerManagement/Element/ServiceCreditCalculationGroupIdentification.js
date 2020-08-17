var Modeler = require("../Modeler.js");
var className = 'ElementServiceCreditCalculationGroupIdentification';

var ElementServiceCreditCalculationGroupIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ServiceCreditCalculationGroupIdentification: {
      type: "TypeServiceCreditCalculationGroupIdentificationType",
      wsdlDefinition: {
        name: "ServiceCreditCalculationGroupIdentification",
        type: "ServiceCreditCalculationGroupIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Service Credit Calculation Group object"
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
	  ServiceCreditCalculationGroupIdentification: {
      type: "TypeServiceCreditCalculationGroupIdentificationType",
      wsdlDefinition: {
        name: "ServiceCreditCalculationGroupIdentification",
        type: "ServiceCreditCalculationGroupIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Service Credit Calculation Group object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementServiceCreditCalculationGroupIdentification;
Modeler.register(ElementServiceCreditCalculationGroupIdentification, "ElementServiceCreditCalculationGroupIdentification");
