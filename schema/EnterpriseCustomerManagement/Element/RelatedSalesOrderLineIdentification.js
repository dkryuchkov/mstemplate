var Modeler = require("../Modeler.js");
var className = 'ElementRelatedSalesOrderLineIdentification';

var ElementRelatedSalesOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedSalesOrderLineIdentification: {
      type: "TypeSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RelatedSalesOrderLineIdentification",
        type: "SalesOrderLineIdentificationType",
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
	  RelatedSalesOrderLineIdentification: {
      type: "TypeSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RelatedSalesOrderLineIdentification",
        type: "SalesOrderLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedSalesOrderLineIdentification;
Modeler.register(ElementRelatedSalesOrderLineIdentification, "ElementRelatedSalesOrderLineIdentification");
