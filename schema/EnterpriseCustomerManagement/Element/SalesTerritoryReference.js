var Modeler = require("../Modeler.js");
var className = 'ElementSalesTerritoryReference';

var ElementSalesTerritoryReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesTerritoryReference: {
      type: "TypeSalesTerritoryReferenceType",
      wsdlDefinition: {
        name: "SalesTerritoryReference",
        type: "SalesTerritoryReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Sales Order"
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
	  SalesTerritoryReference: {
      type: "TypeSalesTerritoryReferenceType",
      wsdlDefinition: {
        name: "SalesTerritoryReference",
        type: "SalesTerritoryReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Sales Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesTerritoryReference;
Modeler.register(ElementSalesTerritoryReference, "ElementSalesTerritoryReference");
