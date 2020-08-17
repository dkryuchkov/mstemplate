var Modeler = require("../Modeler.js");
var className = 'ElementSalesCommission';

var ElementSalesCommission = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesCommission: {
      type: "TypeSalesCommissionType",
      wsdlDefinition: {
        name: "SalesCommission",
        type: "SalesCommissionType",
        "xsd:annotation": {
          "xsd:documentation": "Contains information about the calculation/ amount of commission and the salesperson that receives the commission"
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
	  SalesCommission: {
      type: "TypeSalesCommissionType",
      wsdlDefinition: {
        name: "SalesCommission",
        type: "SalesCommissionType",
        "xsd:annotation": {
          "xsd:documentation": "Contains information about the calculation/ amount of commission and the salesperson that receives the commission"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesCommission;
Modeler.register(ElementSalesCommission, "ElementSalesCommission");
