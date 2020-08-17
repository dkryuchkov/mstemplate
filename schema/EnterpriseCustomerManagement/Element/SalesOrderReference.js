var Modeler = require("../Modeler.js");
var className = 'ElementSalesOrderReference';

var ElementSalesOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        name: "SalesOrderReference",
        type: "SalesOrderReferenceType",
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
	  SalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        name: "SalesOrderReference",
        type: "SalesOrderReferenceType",
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

module.exports = ElementSalesOrderReference;
Modeler.register(ElementSalesOrderReference, "ElementSalesOrderReference");
