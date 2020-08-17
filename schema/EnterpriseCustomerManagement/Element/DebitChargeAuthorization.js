var Modeler = require("../Modeler.js");
var className = 'ElementDebitChargeAuthorization';

var ElementDebitChargeAuthorization = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DebitChargeAuthorization: {
      type: "TypeDebitChargeAuthorizationType",
      wsdlDefinition: {
        name: "DebitChargeAuthorization",
        type: "DebitChargeAuthorizationType",
        "xsd:annotation": {
          "xsd:documentation": "Debit Card Payment and authorization Details"
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
	  DebitChargeAuthorization: {
      type: "TypeDebitChargeAuthorizationType",
      wsdlDefinition: {
        name: "DebitChargeAuthorization",
        type: "DebitChargeAuthorizationType",
        "xsd:annotation": {
          "xsd:documentation": "Debit Card Payment and authorization Details"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDebitChargeAuthorization;
Modeler.register(ElementDebitChargeAuthorization, "ElementDebitChargeAuthorization");
