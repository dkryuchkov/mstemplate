var Modeler = require("../Modeler.js");
var className = 'ElementCreditChargeAuthorization';

var ElementCreditChargeAuthorization = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditChargeAuthorization: {
      type: "TypeCreditChargeAuthorizationType",
      wsdlDefinition: {
        name: "CreditChargeAuthorization",
        type: "CreditChargeAuthorizationType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Card Payment and authorization Details"
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
	  CreditChargeAuthorization: {
      type: "TypeCreditChargeAuthorizationType",
      wsdlDefinition: {
        name: "CreditChargeAuthorization",
        type: "CreditChargeAuthorizationType",
        "xsd:annotation": {
          "xsd:documentation": "Credit Card Payment and authorization Details"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreditChargeAuthorization;
Modeler.register(ElementCreditChargeAuthorization, "ElementCreditChargeAuthorization");
