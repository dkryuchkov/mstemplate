var Modeler = require("../Modeler.js");
var className = 'TypeSalesPlanPeriodReferenceType';

var TypeSalesPlanPeriodReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesPlanPeriodIdentification: {
      type: "TypeSalesPlanPeriodIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesPlanPeriodIdentification",
        type: "SalesPlanPeriodIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:SalesPlanPeriodIdentification",
        type: "SalesPlanPeriodIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSalesPlanPeriodReferenceType;
Modeler.register(TypeSalesPlanPeriodReferenceType, "TypeSalesPlanPeriodReferenceType");
