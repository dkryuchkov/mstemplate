var Modeler = require("../Modeler.js");
var className = 'ElementSalesOrderScheduleIdentification';

var ElementSalesOrderScheduleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOrderScheduleIdentification: {
      type: "TypeSalesOrderScheduleIdentificationType",
      wsdlDefinition: {
        name: "SalesOrderScheduleIdentification",
        type: "SalesOrderScheduleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Sales Order Schedule"
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
	  SalesOrderScheduleIdentification: {
      type: "TypeSalesOrderScheduleIdentificationType",
      wsdlDefinition: {
        name: "SalesOrderScheduleIdentification",
        type: "SalesOrderScheduleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Sales Order Schedule"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesOrderScheduleIdentification;
Modeler.register(ElementSalesOrderScheduleIdentification, "ElementSalesOrderScheduleIdentification");
