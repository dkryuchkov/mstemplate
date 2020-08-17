var Modeler = require("../Modeler.js");
var className = 'ElementCreditProfileIdentification';

var ElementCreditProfileIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditProfileIdentification: {
      type: "TypeCreditProfileIdentificationType",
      wsdlDefinition: {
        name: "CreditProfileIdentification",
        type: "CreditProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Credit Profile"
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
	  CreditProfileIdentification: {
      type: "TypeCreditProfileIdentificationType",
      wsdlDefinition: {
        name: "CreditProfileIdentification",
        type: "CreditProfileIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Credit Profile"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreditProfileIdentification;
Modeler.register(ElementCreditProfileIdentification, "ElementCreditProfileIdentification");
