var Modeler = require("../Modeler.js");
var className = 'ElementParentTransportationSalesOrderReference';

var ElementParentTransportationSalesOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentTransportationSalesOrderReference: {
      type: "TypeTransportationSalesOrderReferenceType",
      wsdlDefinition: {
        name: "ParentTransportationSalesOrderReference",
        type: "TransportationSalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Transportation parent sales order"
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
	  ParentTransportationSalesOrderReference: {
      type: "TypeTransportationSalesOrderReferenceType",
      wsdlDefinition: {
        name: "ParentTransportationSalesOrderReference",
        type: "TransportationSalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Transportation parent sales order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentTransportationSalesOrderReference;
Modeler.register(ElementParentTransportationSalesOrderReference, "ElementParentTransportationSalesOrderReference");
