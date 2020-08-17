var Modeler = require("../Modeler.js");
var className = 'TypeCustomSalesOrderLineScheduleReferenceType';

var TypeCustomSalesOrderLineScheduleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSalesOrderLineScheduleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesOrderLineScheduleReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomSalesOrderLineScheduleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesOrderLineScheduleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSalesOrderLineScheduleReferenceType;
Modeler.register(TypeCustomSalesOrderLineScheduleReferenceType, "TypeCustomSalesOrderLineScheduleReferenceType");
