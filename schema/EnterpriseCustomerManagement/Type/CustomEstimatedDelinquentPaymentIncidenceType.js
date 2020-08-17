var Modeler = require("../Modeler.js");
var className = 'TypeCustomEstimatedDelinquentPaymentIncidenceType';

var TypeCustomEstimatedDelinquentPaymentIncidenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomEstimatedDelinquentPaymentIncidenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEstimatedDelinquentPaymentIncidenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomEstimatedDelinquentPaymentIncidenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomEstimatedDelinquentPaymentIncidenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomEstimatedDelinquentPaymentIncidenceType;
Modeler.register(TypeCustomEstimatedDelinquentPaymentIncidenceType, "TypeCustomEstimatedDelinquentPaymentIncidenceType");
