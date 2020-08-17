var Modeler = require("../Modeler.js");
var className = 'ElementSalesTerritoryIdentification';

var ElementSalesTerritoryIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesTerritoryIdentification: {
      type: "TypeSalesTerritoryIdentificationType",
      wsdlDefinition: {
        name: "SalesTerritoryIdentification",
        type: "SalesTerritoryIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Sales Territory"
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
	  SalesTerritoryIdentification: {
      type: "TypeSalesTerritoryIdentificationType",
      wsdlDefinition: {
        name: "SalesTerritoryIdentification",
        type: "SalesTerritoryIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Sales Territory"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesTerritoryIdentification;
Modeler.register(ElementSalesTerritoryIdentification, "ElementSalesTerritoryIdentification");
