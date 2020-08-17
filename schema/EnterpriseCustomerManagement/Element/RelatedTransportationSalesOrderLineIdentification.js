var Modeler = require("../Modeler.js");
var className = 'ElementRelatedTransportationSalesOrderLineIdentification';

var ElementRelatedTransportationSalesOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedTransportationSalesOrderLineIdentification: {
      type: "TypeTransportationSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RelatedTransportationSalesOrderLineIdentification",
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
	  RelatedTransportationSalesOrderLineIdentification: {
      type: "TypeTransportationSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RelatedTransportationSalesOrderLineIdentification",
        type: "TransportationSalesOrderLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedTransportationSalesOrderLineIdentification;
Modeler.register(ElementRelatedTransportationSalesOrderLineIdentification, "ElementRelatedTransportationSalesOrderLineIdentification");
