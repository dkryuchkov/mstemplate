var Modeler = require("../Modeler.js");
var className = 'ElementDebitCard';

var ElementDebitCard = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DebitCard: {
      type: "TypeDebitCardType",
      wsdlDefinition: {
        name: "DebitCard",
        type: "DebitCardType",
        "xsd:annotation": {
          "xsd:documentation": "Detailed information about a credit card, typically required for transactions that involve debit card payment"
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
	  DebitCard: {
      type: "TypeDebitCardType",
      wsdlDefinition: {
        name: "DebitCard",
        type: "DebitCardType",
        "xsd:annotation": {
          "xsd:documentation": "Detailed information about a credit card, typically required for transactions that involve debit card payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDebitCard;
Modeler.register(ElementDebitCard, "ElementDebitCard");
