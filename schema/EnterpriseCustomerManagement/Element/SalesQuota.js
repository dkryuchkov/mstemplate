var Modeler = require("../Modeler.js");
var className = 'ElementSalesQuota';

var ElementSalesQuota = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesQuota: {
      type: "TypeSalesQuotaType",
      wsdlDefinition: {
        name: "SalesQuota",
        type: "SalesQuotaType",
        "xsd:annotation": {
          "xsd:documentation": "Sales Quota is the expected sales target in an accounting period for a specific set of products/services assigned to a sales unit typically expressed in monetary dollars or units sold."
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
	  SalesQuota: {
      type: "TypeSalesQuotaType",
      wsdlDefinition: {
        name: "SalesQuota",
        type: "SalesQuotaType",
        "xsd:annotation": {
          "xsd:documentation": "Sales Quota is the expected sales target in an accounting period for a specific set of products/services assigned to a sales unit typically expressed in monetary dollars or units sold."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesQuota;
Modeler.register(ElementSalesQuota, "ElementSalesQuota");
