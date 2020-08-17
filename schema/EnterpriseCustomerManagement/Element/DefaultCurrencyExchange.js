var Modeler = require("../Modeler.js");
var className = 'ElementDefaultCurrencyExchange';

var ElementDefaultCurrencyExchange = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DefaultCurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        name: "DefaultCurrencyExchange",
        type: "CurrencyExchangeType",
        "xsd:annotation": {
          "xsd:documentation": "Default currency exchange to be applied"
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
	  DefaultCurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        name: "DefaultCurrencyExchange",
        type: "CurrencyExchangeType",
        "xsd:annotation": {
          "xsd:documentation": "Default currency exchange to be applied"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDefaultCurrencyExchange;
Modeler.register(ElementDefaultCurrencyExchange, "ElementDefaultCurrencyExchange");
