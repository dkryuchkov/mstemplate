var Modeler = require("../Modeler.js");
var className = 'ElementSalesCredit';

var ElementSalesCredit = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesCredit: {
      type: "TypeSalesCreditType",
      wsdlDefinition: {
        name: "SalesCredit",
        type: "SalesCreditType",
        "xsd:annotation": {
          "xsd:documentation": "Sales Credit allows for recognition or credit for a sale or line items of a sale to be defined. In companies with a single sales force, the person who closes the sale typically receives 100 percent sales credit or recognition of the sale. If two or more sales reps influence the sale, then sales credit is shared in a pre-defined proportional split. Overlays or product specialists may also receive sales credit or recognition for their involvement in a sale or line items of a sale."
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
	  SalesCredit: {
      type: "TypeSalesCreditType",
      wsdlDefinition: {
        name: "SalesCredit",
        type: "SalesCreditType",
        "xsd:annotation": {
          "xsd:documentation": "Sales Credit allows for recognition or credit for a sale or line items of a sale to be defined. In companies with a single sales force, the person who closes the sale typically receives 100 percent sales credit or recognition of the sale. If two or more sales reps influence the sale, then sales credit is shared in a pre-defined proportional split. Overlays or product specialists may also receive sales credit or recognition for their involvement in a sale or line items of a sale."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesCredit;
Modeler.register(ElementSalesCredit, "ElementSalesCredit");
