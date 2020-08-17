var Modeler = require("../Modeler.js");
var className = 'ElementClearedCurrencyExchange';

var ElementClearedCurrencyExchange = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ClearedCurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        name: "ClearedCurrencyExchange",
        type: "CurrencyExchangeType",
        "xsd:annotation": {
          "xsd:documentation": "The currency exchange date, rate and rate type for an amount that has been  cleared for a foreign currency payment"
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
	  ClearedCurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        name: "ClearedCurrencyExchange",
        type: "CurrencyExchangeType",
        "xsd:annotation": {
          "xsd:documentation": "The currency exchange date, rate and rate type for an amount that has been  cleared for a foreign currency payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementClearedCurrencyExchange;
Modeler.register(ElementClearedCurrencyExchange, "ElementClearedCurrencyExchange");
