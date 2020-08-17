var Modeler = require("../Modeler.js");
var className = 'ElementTransportationSalesOrderLineIdentification';

var ElementTransportationSalesOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TransportationSalesOrderLineIdentification: {
      type: "TypeTransportationSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "TransportationSalesOrderLineIdentification",
        type: "TransportationSalesOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Transportation Sales Order line"
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
	  TransportationSalesOrderLineIdentification: {
      type: "TypeTransportationSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "TransportationSalesOrderLineIdentification",
        type: "TransportationSalesOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Transportation Sales Order line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTransportationSalesOrderLineIdentification;
Modeler.register(ElementTransportationSalesOrderLineIdentification, "ElementTransportationSalesOrderLineIdentification");
