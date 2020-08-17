var Modeler = require("../Modeler.js");
var className = 'ElementRootParentSalesOrderLineIdentification';

var ElementRootParentSalesOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RootParentSalesOrderLineIdentification: {
      type: "TypeSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RootParentSalesOrderLineIdentification",
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
	  RootParentSalesOrderLineIdentification: {
      type: "TypeSalesOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RootParentSalesOrderLineIdentification",
        type: "SalesOrderLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRootParentSalesOrderLineIdentification;
Modeler.register(ElementRootParentSalesOrderLineIdentification, "ElementRootParentSalesOrderLineIdentification");
