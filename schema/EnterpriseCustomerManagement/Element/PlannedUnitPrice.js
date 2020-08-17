var Modeler = require("../Modeler.js");
var className = 'ElementPlannedUnitPrice';

var ElementPlannedUnitPrice = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PlannedUnitPrice: {
      type: "TypePlannedUnitPriceType",
      wsdlDefinition: {
        name: "PlannedUnitPrice",
        type: "PlannedUnitPriceType",
        "xsd:annotation": {
          "xsd:documentation": "The planned or anticipated price per unit of the component/object in context. It is used, for example, in project planning such as the price of labor."
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
	  PlannedUnitPrice: {
      type: "TypePlannedUnitPriceType",
      wsdlDefinition: {
        name: "PlannedUnitPrice",
        type: "PlannedUnitPriceType",
        "xsd:annotation": {
          "xsd:documentation": "The planned or anticipated price per unit of the component/object in context. It is used, for example, in project planning such as the price of labor."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPlannedUnitPrice;
Modeler.register(ElementPlannedUnitPrice, "ElementPlannedUnitPrice");
