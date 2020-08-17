var Modeler = require("../Modeler.js");
var className = 'ElementProxyQuoteLimitPrice';

var ElementProxyQuoteLimitPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProxyQuoteLimitPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "ProxyQuoteLimitPrice",
        type: "PriceType",
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
	  ProxyQuoteLimitPrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "ProxyQuoteLimitPrice",
        type: "PriceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProxyQuoteLimitPrice;
Modeler.register(ElementProxyQuoteLimitPrice, "ElementProxyQuoteLimitPrice");
