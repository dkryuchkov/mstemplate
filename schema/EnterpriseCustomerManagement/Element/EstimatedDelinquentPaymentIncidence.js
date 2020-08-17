var Modeler = require("../Modeler.js");
var className = 'ElementEstimatedDelinquentPaymentIncidence';

var ElementEstimatedDelinquentPaymentIncidence = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EstimatedDelinquentPaymentIncidence: {
      type: "TypeEstimatedDelinquentPaymentIncidenceType",
      wsdlDefinition: {
        name: "EstimatedDelinquentPaymentIncidence",
        type: "EstimatedDelinquentPaymentIncidenceType",
        "xsd:annotation": {
          "xsd:documentation": "Delinquent Payment incidence details"
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
	  EstimatedDelinquentPaymentIncidence: {
      type: "TypeEstimatedDelinquentPaymentIncidenceType",
      wsdlDefinition: {
        name: "EstimatedDelinquentPaymentIncidence",
        type: "EstimatedDelinquentPaymentIncidenceType",
        "xsd:annotation": {
          "xsd:documentation": "Delinquent Payment incidence details"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEstimatedDelinquentPaymentIncidence;
Modeler.register(ElementEstimatedDelinquentPaymentIncidence, "ElementEstimatedDelinquentPaymentIncidence");
