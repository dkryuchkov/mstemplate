var Modeler = require("../Modeler.js");
var className = 'ElementParentSalesOrderLineReference';

var ElementParentSalesOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentSalesOrderLineReference: {
      type: "TypeSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "ParentSalesOrderLineReference",
        type: "SalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the prior revision of this order line."
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
	  ParentSalesOrderLineReference: {
      type: "TypeSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "ParentSalesOrderLineReference",
        type: "SalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the prior revision of this order line."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentSalesOrderLineReference;
Modeler.register(ElementParentSalesOrderLineReference, "ElementParentSalesOrderLineReference");
