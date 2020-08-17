var Modeler = require("../Modeler.js");
var className = 'ElementParentSalesOrderReference';

var ElementParentSalesOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentSalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        name: "ParentSalesOrderReference",
        type: "SalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a parent sales order"
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
	  ParentSalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        name: "ParentSalesOrderReference",
        type: "SalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a parent sales order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentSalesOrderReference;
Modeler.register(ElementParentSalesOrderReference, "ElementParentSalesOrderReference");
