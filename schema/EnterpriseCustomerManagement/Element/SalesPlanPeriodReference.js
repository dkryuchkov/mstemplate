var Modeler = require("../Modeler.js");
var className = 'ElementSalesPlanPeriodReference';

var ElementSalesPlanPeriodReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesPlanPeriodReference: {
      type: "TypeSalesPlanPeriodReferenceType",
      wsdlDefinition: {
        name: "SalesPlanPeriodReference",
        type: "SalesPlanPeriodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a SalesPlanPeriod. A SalesPlanPeriod object represents a time period used across sales and marketing for strategizing and planning sales and marketing objectives and activities. The period may or may not coincide with the accounting period. For example, a period associated with a SalesPlan object which is strategic may be for 6 months or one year period."
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
	  SalesPlanPeriodReference: {
      type: "TypeSalesPlanPeriodReferenceType",
      wsdlDefinition: {
        name: "SalesPlanPeriodReference",
        type: "SalesPlanPeriodReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a SalesPlanPeriod. A SalesPlanPeriod object represents a time period used across sales and marketing for strategizing and planning sales and marketing objectives and activities. The period may or may not coincide with the accounting period. For example, a period associated with a SalesPlan object which is strategic may be for 6 months or one year period."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesPlanPeriodReference;
Modeler.register(ElementSalesPlanPeriodReference, "ElementSalesPlanPeriodReference");
