var Modeler = require("../Modeler.js");
var className = 'TypeTransportationSalesOrderReferenceType';

var TypeTransportationSalesOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TransportationSalesOrderIdentification: {
      type: "TypeTransportationSalesOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TransportationSalesOrderIdentification",
        type: "TransportationSalesOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTransportationSalesOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTransportationSalesOrderReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:TransportationSalesOrderIdentification",
        type: "TransportationSalesOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTransportationSalesOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTransportationSalesOrderReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTransportationSalesOrderReferenceType;
Modeler.register(TypeTransportationSalesOrderReferenceType, "TypeTransportationSalesOrderReferenceType");
