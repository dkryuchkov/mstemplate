var Modeler = require("../Modeler.js");
var className = 'TypeCustomPurchaseOrderLineScheduleReferenceType';

var TypeCustomPurchaseOrderLineScheduleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPurchaseOrderLineScheduleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseOrderLineScheduleReferenceType",
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
	  CustomPurchaseOrderLineScheduleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseOrderLineScheduleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPurchaseOrderLineScheduleReferenceType;
Modeler.register(TypeCustomPurchaseOrderLineScheduleReferenceType, "TypeCustomPurchaseOrderLineScheduleReferenceType");
