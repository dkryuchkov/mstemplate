var Modeler = require("../Modeler.js");
var className = 'ElementOriginalTransportationSalesOrderReference';

var ElementOriginalTransportationSalesOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalTransportationSalesOrderReference: {
      type: "TypeTransportationSalesOrderReferenceType",
      wsdlDefinition: {
        name: "OriginalTransportationSalesOrderReference",
        type: "TransportationSalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Original Transportation sales order"
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
	  OriginalTransportationSalesOrderReference: {
      type: "TypeTransportationSalesOrderReferenceType",
      wsdlDefinition: {
        name: "OriginalTransportationSalesOrderReference",
        type: "TransportationSalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Original Transportation sales order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalTransportationSalesOrderReference;
Modeler.register(ElementOriginalTransportationSalesOrderReference, "ElementOriginalTransportationSalesOrderReference");
