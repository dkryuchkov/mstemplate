var Modeler = require("../Modeler.js");
var className = 'ElementSalesOrderScheduleReference';

var ElementSalesOrderScheduleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOrderScheduleReference: {
      type: "TypeSalesOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "SalesOrderScheduleReference",
        type: "SalesOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a schedule line of a sales order"
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
	  SalesOrderScheduleReference: {
      type: "TypeSalesOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "SalesOrderScheduleReference",
        type: "SalesOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a schedule line of a sales order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesOrderScheduleReference;
Modeler.register(ElementSalesOrderScheduleReference, "ElementSalesOrderScheduleReference");
