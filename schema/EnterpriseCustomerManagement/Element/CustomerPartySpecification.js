var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartySpecification';

var ElementCustomerPartySpecification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartySpecification: {
      type: "TypeCustomerPartySpecificationType",
      wsdlDefinition: {
        name: "CustomerPartySpecification",
        type: "CustomerPartySpecificationType",
        "xsd:annotation": {
          "xsd:documentation": "User defined attributes of the customer party"
        },
        ns: "WL5G3N1",
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
	  CustomerPartySpecification: {
      type: "TypeCustomerPartySpecificationType",
      wsdlDefinition: {
        name: "CustomerPartySpecification",
        type: "CustomerPartySpecificationType",
        "xsd:annotation": {
          "xsd:documentation": "User defined attributes of the customer party"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartySpecification;
Modeler.register(ElementCustomerPartySpecification, "ElementCustomerPartySpecification");
