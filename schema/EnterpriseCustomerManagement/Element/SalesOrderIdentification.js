var Modeler = require("../Modeler.js");
var className = 'ElementSalesOrderIdentification';

var ElementSalesOrderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOrderIdentification: {
      type: "TypeSalesOrderIdentificationType",
      wsdlDefinition: {
        name: "SalesOrderIdentification",
        type: "SalesOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Sales Order"
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
	  SalesOrderIdentification: {
      type: "TypeSalesOrderIdentificationType",
      wsdlDefinition: {
        name: "SalesOrderIdentification",
        type: "SalesOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Sales Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesOrderIdentification;
Modeler.register(ElementSalesOrderIdentification, "ElementSalesOrderIdentification");
