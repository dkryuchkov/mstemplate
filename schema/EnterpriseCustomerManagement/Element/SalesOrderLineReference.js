var Modeler = require("../Modeler.js");
var className = 'ElementSalesOrderLineReference';

var ElementSalesOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOrderLineReference: {
      type: "TypeSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "SalesOrderLineReference",
        type: "SalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line on a sales order"
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
	  SalesOrderLineReference: {
      type: "TypeSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "SalesOrderLineReference",
        type: "SalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line on a sales order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesOrderLineReference;
Modeler.register(ElementSalesOrderLineReference, "ElementSalesOrderLineReference");
