var Modeler = require("../Modeler.js");
var className = 'ElementParentSalesOrderLineIdentification';

var ElementParentSalesOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentSalesOrderLineIdentification: {
      type: "TypeSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ParentSalesOrderLineIdentification",
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
	  ParentSalesOrderLineIdentification: {
      type: "TypeSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ParentSalesOrderLineIdentification",
        type: "SalesOrderLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentSalesOrderLineIdentification;
Modeler.register(ElementParentSalesOrderLineIdentification, "ElementParentSalesOrderLineIdentification");
