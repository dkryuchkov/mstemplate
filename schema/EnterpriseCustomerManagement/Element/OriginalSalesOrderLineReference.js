var Modeler = require("../Modeler.js");
var className = 'ElementOriginalSalesOrderLineReference';

var ElementOriginalSalesOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalSalesOrderLineReference: {
      type: "TypeSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "OriginalSalesOrderLineReference",
        type: "SalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Sales Order Line of a base Order"
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
	  OriginalSalesOrderLineReference: {
      type: "TypeSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "OriginalSalesOrderLineReference",
        type: "SalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Sales Order Line of a base Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalSalesOrderLineReference;
Modeler.register(ElementOriginalSalesOrderLineReference, "ElementOriginalSalesOrderLineReference");
