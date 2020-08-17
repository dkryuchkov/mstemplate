var Modeler = require("../Modeler.js");
var className = 'ElementTransportationSalesOrderIdentification';

var ElementTransportationSalesOrderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TransportationSalesOrderIdentification: {
      type: "TypeTransportationSalesOrderIdentificationType",
      wsdlDefinition: {
        name: "TransportationSalesOrderIdentification",
        type: "TransportationSalesOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a TransportationSalesOrder"
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
	  TransportationSalesOrderIdentification: {
      type: "TypeTransportationSalesOrderIdentificationType",
      wsdlDefinition: {
        name: "TransportationSalesOrderIdentification",
        type: "TransportationSalesOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a TransportationSalesOrder"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTransportationSalesOrderIdentification;
Modeler.register(ElementTransportationSalesOrderIdentification, "ElementTransportationSalesOrderIdentification");
