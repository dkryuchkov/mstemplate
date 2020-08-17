var Modeler = require("../Modeler.js");
var className = 'ElementPriceFormulaIdentification';

var ElementPriceFormulaIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PriceFormulaIdentification: {
      type: "TypePriceFormulaIdentificationType",
      wsdlDefinition: {
        name: "PriceFormulaIdentification",
        type: "PriceFormulaIdentificationType",
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
	  PriceFormulaIdentification: {
      type: "TypePriceFormulaIdentificationType",
      wsdlDefinition: {
        name: "PriceFormulaIdentification",
        type: "PriceFormulaIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPriceFormulaIdentification;
Modeler.register(ElementPriceFormulaIdentification, "ElementPriceFormulaIdentification");
