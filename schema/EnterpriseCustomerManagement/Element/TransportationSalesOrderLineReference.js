var Modeler = require("../Modeler.js");
var className = 'ElementTransportationSalesOrderLineReference';

var ElementTransportationSalesOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TransportationSalesOrderLineReference: {
      type: "TypeTransportationSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "TransportationSalesOrderLineReference",
        type: "TransportationSalesOrderLineReferenceType",
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
	  TransportationSalesOrderLineReference: {
      type: "TypeTransportationSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "TransportationSalesOrderLineReference",
        type: "TransportationSalesOrderLineReferenceType",
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

module.exports = ElementTransportationSalesOrderLineReference;
Modeler.register(ElementTransportationSalesOrderLineReference, "ElementTransportationSalesOrderLineReference");
