var Modeler = require("../Modeler.js");
var className = 'ElementSalesOrderLineIdentification';

var ElementSalesOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOrderLineIdentification: {
      type: "TypeSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "SalesOrderLineIdentification",
        type: "SalesOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Sales Order line"
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
	  SalesOrderLineIdentification: {
      type: "TypeSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "SalesOrderLineIdentification",
        type: "SalesOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Sales Order line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesOrderLineIdentification;
Modeler.register(ElementSalesOrderLineIdentification, "ElementSalesOrderLineIdentification");
