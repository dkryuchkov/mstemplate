var Modeler = require("../Modeler.js");
var className = 'TypeCustomSalesOrderScheduleReferenceType';

var TypeCustomSalesOrderScheduleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSalesOrderScheduleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesOrderScheduleReferenceType",
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
	  CustomSalesOrderScheduleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesOrderScheduleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSalesOrderScheduleReferenceType;
Modeler.register(TypeCustomSalesOrderScheduleReferenceType, "TypeCustomSalesOrderScheduleReferenceType");
