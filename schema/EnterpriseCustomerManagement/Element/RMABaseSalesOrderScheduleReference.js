var Modeler = require("../Modeler.js");
var className = 'ElementRMABaseSalesOrderScheduleReference';

var ElementRMABaseSalesOrderScheduleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RMABaseSalesOrderScheduleReference: {
      type: "TypeSalesOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "RMABaseSalesOrderScheduleReference",
        type: "SalesOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to the original outbound SalesOrderSchedule within a SalesOrder object instance that has an associated return (RMA)"
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
	  RMABaseSalesOrderScheduleReference: {
      type: "TypeSalesOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "RMABaseSalesOrderScheduleReference",
        type: "SalesOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to the original outbound SalesOrderSchedule within a SalesOrder object instance that has an associated return (RMA)"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRMABaseSalesOrderScheduleReference;
Modeler.register(ElementRMABaseSalesOrderScheduleReference, "ElementRMABaseSalesOrderScheduleReference");
