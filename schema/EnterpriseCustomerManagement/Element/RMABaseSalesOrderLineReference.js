var Modeler = require("../Modeler.js");
var className = 'ElementRMABaseSalesOrderLineReference';

var ElementRMABaseSalesOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RMABaseSalesOrderLineReference: {
      type: "TypeSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "RMABaseSalesOrderLineReference",
        type: "SalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to the original outbound SalesOrderLine within a SalesOrder object instance that has an associated return (RMA)"
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
	  RMABaseSalesOrderLineReference: {
      type: "TypeSalesOrderLineReferenceType",
      wsdlDefinition: {
        name: "RMABaseSalesOrderLineReference",
        type: "SalesOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to the original outbound SalesOrderLine within a SalesOrder object instance that has an associated return (RMA)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRMABaseSalesOrderLineReference;
Modeler.register(ElementRMABaseSalesOrderLineReference, "ElementRMABaseSalesOrderLineReference");
