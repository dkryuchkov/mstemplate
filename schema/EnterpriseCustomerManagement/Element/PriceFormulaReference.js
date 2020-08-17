var Modeler = require("../Modeler.js");
var className = 'ElementPriceFormulaReference';

var ElementPriceFormulaReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PriceFormulaReference: {
      type: "TypePriceFormulaReferenceType",
      wsdlDefinition: {
        name: "PriceFormulaReference",
        type: "PriceFormulaReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price Formula.Price Formula is used to calculate the price on a price list line"
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
	  PriceFormulaReference: {
      type: "TypePriceFormulaReferenceType",
      wsdlDefinition: {
        name: "PriceFormulaReference",
        type: "PriceFormulaReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Price Formula.Price Formula is used to calculate the price on a price list line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPriceFormulaReference;
Modeler.register(ElementPriceFormulaReference, "ElementPriceFormulaReference");
