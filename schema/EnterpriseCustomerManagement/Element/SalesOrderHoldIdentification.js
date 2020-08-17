var Modeler = require("../Modeler.js");
var className = 'ElementSalesOrderHoldIdentification';

var ElementSalesOrderHoldIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOrderHoldIdentification: {
      type: "TypeSalesOrderHoldIdentificationType",
      wsdlDefinition: {
        name: "SalesOrderHoldIdentification",
        type: "SalesOrderHoldIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Sales Order Hold business component of the Sales Order object."
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
	  SalesOrderHoldIdentification: {
      type: "TypeSalesOrderHoldIdentificationType",
      wsdlDefinition: {
        name: "SalesOrderHoldIdentification",
        type: "SalesOrderHoldIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Sales Order Hold business component of the Sales Order object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesOrderHoldIdentification;
Modeler.register(ElementSalesOrderHoldIdentification, "ElementSalesOrderHoldIdentification");
