var Modeler = require("../Modeler.js");
var className = 'ElementOriginalTransportationSalesOrderLineReference';

var ElementOriginalTransportationSalesOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalTransportationSalesOrderLineReference: {
      type: "TypeTransportationSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "OriginalTransportationSalesOrderLineReference",
        type: "TransportationSalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Transportation Sales Order Line of a base Order"
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
	  OriginalTransportationSalesOrderLineReference: {
      type: "TypeTransportationSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "OriginalTransportationSalesOrderLineReference",
        type: "TransportationSalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Transportation Sales Order Line of a base Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalTransportationSalesOrderLineReference;
Modeler.register(ElementOriginalTransportationSalesOrderLineReference, "ElementOriginalTransportationSalesOrderLineReference");
