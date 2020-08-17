var Modeler = require("../Modeler.js");
var className = 'ElementParentTransportationSalesOrderLineIdentification';

var ElementParentTransportationSalesOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentTransportationSalesOrderLineIdentification: {
      type: "TypeTransportationSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ParentTransportationSalesOrderLineIdentification",
        type: "TransportationSalesOrderLineIdentificationType",
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
	  ParentTransportationSalesOrderLineIdentification: {
      type: "TypeTransportationSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ParentTransportationSalesOrderLineIdentification",
        type: "TransportationSalesOrderLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentTransportationSalesOrderLineIdentification;
Modeler.register(ElementParentTransportationSalesOrderLineIdentification, "ElementParentTransportationSalesOrderLineIdentification");
