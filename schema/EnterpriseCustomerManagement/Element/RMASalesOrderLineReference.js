var Modeler = require("../Modeler.js");
var className = 'ElementRMASalesOrderLineReference';

var ElementRMASalesOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RMASalesOrderLineReference: {
      type: "TypeRMASalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "RMASalesOrderLineReference",
        type: "RMASalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a SalesOrderLine associated with a return item within a SalesOrder object instance"
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
	  RMASalesOrderLineReference: {
      type: "TypeRMASalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "RMASalesOrderLineReference",
        type: "RMASalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a SalesOrderLine associated with a return item within a SalesOrder object instance"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRMASalesOrderLineReference;
Modeler.register(ElementRMASalesOrderLineReference, "ElementRMASalesOrderLineReference");
