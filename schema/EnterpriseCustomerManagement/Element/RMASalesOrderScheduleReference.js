var Modeler = require("../Modeler.js");
var className = 'ElementRMASalesOrderScheduleReference';

var ElementRMASalesOrderScheduleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RMASalesOrderScheduleReference: {
      type: "TypeRMASalesOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "RMASalesOrderScheduleReference",
        type: "RMASalesOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a SalesOrderSchedule associated with a return item within a SalesOrder object instance"
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
	  RMASalesOrderScheduleReference: {
      type: "TypeRMASalesOrderScheduleReferenceType",
      wsdlDefinition: {
        name: "RMASalesOrderScheduleReference",
        type: "RMASalesOrderScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a SalesOrderSchedule associated with a return item within a SalesOrder object instance"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRMASalesOrderScheduleReference;
Modeler.register(ElementRMASalesOrderScheduleReference, "ElementRMASalesOrderScheduleReference");
