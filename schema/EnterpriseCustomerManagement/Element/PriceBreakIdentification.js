var Modeler = require("../Modeler.js");
var className = 'ElementPriceBreakIdentification';

var ElementPriceBreakIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PriceBreakIdentification: {
      type: "TypePriceBreakIdentificationType",
      wsdlDefinition: {
        name: "PriceBreakIdentification",
        type: "PriceBreakIdentificationType",
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
	  PriceBreakIdentification: {
      type: "TypePriceBreakIdentificationType",
      wsdlDefinition: {
        name: "PriceBreakIdentification",
        type: "PriceBreakIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPriceBreakIdentification;
Modeler.register(ElementPriceBreakIdentification, "ElementPriceBreakIdentification");
