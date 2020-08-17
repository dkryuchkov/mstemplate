var Modeler = require("../Modeler.js");
var className = 'ElementRootParentTransportationSalesOrderLineIdentification';

var ElementRootParentTransportationSalesOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RootParentTransportationSalesOrderLineIdentification: {
      type: "TypeTransportationSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RootParentTransportationSalesOrderLineIdentification",
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
	  RootParentTransportationSalesOrderLineIdentification: {
      type: "TypeTransportationSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RootParentTransportationSalesOrderLineIdentification",
        type: "TransportationSalesOrderLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRootParentTransportationSalesOrderLineIdentification;
Modeler.register(ElementRootParentTransportationSalesOrderLineIdentification, "ElementRootParentTransportationSalesOrderLineIdentification");
