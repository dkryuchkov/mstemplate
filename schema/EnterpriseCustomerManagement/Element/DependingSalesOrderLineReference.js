var Modeler = require("../Modeler.js");
var className = 'ElementDependingSalesOrderLineReference';

var ElementDependingSalesOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DependingSalesOrderLineReference: {
      type: "TypeSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "DependingSalesOrderLineReference",
        type: "SalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Sales Order Line of another Order on which this Line depends on."
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
	  DependingSalesOrderLineReference: {
      type: "TypeSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "DependingSalesOrderLineReference",
        type: "SalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Sales Order Line of another Order on which this Line depends on."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDependingSalesOrderLineReference;
Modeler.register(ElementDependingSalesOrderLineReference, "ElementDependingSalesOrderLineReference");
