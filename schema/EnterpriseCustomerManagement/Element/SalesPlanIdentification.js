var Modeler = require("../Modeler.js");
var className = 'ElementSalesPlanIdentification';

var ElementSalesPlanIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesPlanIdentification: {
      type: "TypeSalesPlanIdentificationType",
      wsdlDefinition: {
        name: "SalesPlanIdentification",
        type: "SalesPlanIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SalesPlan."
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
	  SalesPlanIdentification: {
      type: "TypeSalesPlanIdentificationType",
      wsdlDefinition: {
        name: "SalesPlanIdentification",
        type: "SalesPlanIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SalesPlan."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesPlanIdentification;
Modeler.register(ElementSalesPlanIdentification, "ElementSalesPlanIdentification");
