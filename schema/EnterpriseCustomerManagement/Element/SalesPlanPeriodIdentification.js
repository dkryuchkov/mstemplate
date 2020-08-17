var Modeler = require("../Modeler.js");
var className = 'ElementSalesPlanPeriodIdentification';

var ElementSalesPlanPeriodIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesPlanPeriodIdentification: {
      type: "TypeSalesPlanPeriodIdentificationType",
      wsdlDefinition: {
        name: "SalesPlanPeriodIdentification",
        type: "SalesPlanPeriodIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SalesPlanPeriod."
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
	  SalesPlanPeriodIdentification: {
      type: "TypeSalesPlanPeriodIdentificationType",
      wsdlDefinition: {
        name: "SalesPlanPeriodIdentification",
        type: "SalesPlanPeriodIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SalesPlanPeriod."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesPlanPeriodIdentification;
Modeler.register(ElementSalesPlanPeriodIdentification, "ElementSalesPlanPeriodIdentification");
