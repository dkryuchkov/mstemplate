var Modeler = require("../Modeler.js");
var className = 'ElementMaturityCurrencyExchange';

var ElementMaturityCurrencyExchange = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MaturityCurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        name: "MaturityCurrencyExchange",
        type: "CurrencyExchangeType",
        "xsd:annotation": {
          "xsd:documentation": "The currency exchange date, rate and rate type for a foreign currency payment  that is targeted to the future"
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
	  MaturityCurrencyExchange: {
      type: "TypeCurrencyExchangeType",
      wsdlDefinition: {
        name: "MaturityCurrencyExchange",
        type: "CurrencyExchangeType",
        "xsd:annotation": {
          "xsd:documentation": "The currency exchange date, rate and rate type for a foreign currency payment  that is targeted to the future"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMaturityCurrencyExchange;
Modeler.register(ElementMaturityCurrencyExchange, "ElementMaturityCurrencyExchange");
