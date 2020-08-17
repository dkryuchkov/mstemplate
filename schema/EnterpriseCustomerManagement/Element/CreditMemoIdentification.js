var Modeler = require("../Modeler.js");
var className = 'ElementCreditMemoIdentification';

var ElementCreditMemoIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreditMemoIdentification: {
      type: "TypeCreditMemoIdentificationType",
      wsdlDefinition: {
        name: "CreditMemoIdentification",
        type: "CreditMemoIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Credit Memo"
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
	  CreditMemoIdentification: {
      type: "TypeCreditMemoIdentificationType",
      wsdlDefinition: {
        name: "CreditMemoIdentification",
        type: "CreditMemoIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Credit Memo"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreditMemoIdentification;
Modeler.register(ElementCreditMemoIdentification, "ElementCreditMemoIdentification");
