var Modeler = require("../Modeler.js");
var className = 'ElementMaximumUnitSalePrice';

var ElementMaximumUnitSalePrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MaximumUnitSalePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "MaximumUnitSalePrice",
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
	  MaximumUnitSalePrice: {
      type: "TypePriceType",
      wsdlDefinition: {
        name: "MaximumUnitSalePrice",
        type: "PriceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMaximumUnitSalePrice;
Modeler.register(ElementMaximumUnitSalePrice, "ElementMaximumUnitSalePrice");
