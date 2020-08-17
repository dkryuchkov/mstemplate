var Modeler = require("../Modeler.js");
var className = 'ElementTransportationSalesOrderReference';

var ElementTransportationSalesOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TransportationSalesOrderReference: {
      type: "TypeTransportationSalesOrderReferenceType",
      wsdlDefinition: {
        name: "TransportationSalesOrderReference",
        type: "TransportationSalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Transportation Sales Order"
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
	  TransportationSalesOrderReference: {
      type: "TypeTransportationSalesOrderReferenceType",
      wsdlDefinition: {
        name: "TransportationSalesOrderReference",
        type: "TransportationSalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Transportation Sales Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTransportationSalesOrderReference;
Modeler.register(ElementTransportationSalesOrderReference, "ElementTransportationSalesOrderReference");
