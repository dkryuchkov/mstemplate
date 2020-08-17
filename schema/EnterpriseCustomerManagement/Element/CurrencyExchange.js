var Modeler = require("../Modeler.js");
var className = 'ElementCurrencyExchange';

var ElementCurrencyExchange = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        name: "CurrencyExchange",
        type: "CurrencyExchangeType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the exchange rate between two currencies"
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
	  CurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        name: "CurrencyExchange",
        type: "CurrencyExchangeType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the exchange rate between two currencies"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCurrencyExchange;
Modeler.register(ElementCurrencyExchange, "ElementCurrencyExchange");
