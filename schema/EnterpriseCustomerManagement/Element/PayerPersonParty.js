var Modeler = require("../Modeler.js");
var className = 'ElementPayerPersonParty';

var ElementPayerPersonParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayerPersonParty: {
      type: "TypePayerPersonPartyType",
      wsdlDefinition: {
        name: "PayerPersonParty",
        type: "PayerPersonPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an payer which is a individual"
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
	  PayerPersonParty: {
      type: "TypePayerPersonPartyType",
      wsdlDefinition: {
        name: "PayerPersonParty",
        type: "PayerPersonPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an payer which is a individual"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayerPersonParty;
Modeler.register(ElementPayerPersonParty, "ElementPayerPersonParty");
