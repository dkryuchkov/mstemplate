var Modeler = require("../Modeler.js");
var className = 'ElementDependingSalesOrderReference';

var ElementDependingSalesOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DependingSalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        name: "DependingSalesOrderReference",
        type: "SalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the a previous Sales Order"
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
	  DependingSalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        name: "DependingSalesOrderReference",
        type: "SalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the a previous Sales Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDependingSalesOrderReference;
Modeler.register(ElementDependingSalesOrderReference, "ElementDependingSalesOrderReference");
