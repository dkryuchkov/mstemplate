var Modeler = require("../Modeler.js");
var className = 'ElementOriginalSalesOrderReference';

var ElementOriginalSalesOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalSalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        name: "OriginalSalesOrderReference",
        type: "SalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Original sales order"
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
	  OriginalSalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        name: "OriginalSalesOrderReference",
        type: "SalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Original sales order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalSalesOrderReference;
Modeler.register(ElementOriginalSalesOrderReference, "ElementOriginalSalesOrderReference");
