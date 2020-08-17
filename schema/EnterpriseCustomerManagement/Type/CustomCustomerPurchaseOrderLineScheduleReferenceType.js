var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPurchaseOrderLineScheduleReferenceType';

var TypeCustomCustomerPurchaseOrderLineScheduleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPurchaseOrderLineScheduleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPurchaseOrderLineScheduleReferenceType",
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
	  CustomCustomerPurchaseOrderLineScheduleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPurchaseOrderLineScheduleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPurchaseOrderLineScheduleReferenceType;
Modeler.register(TypeCustomCustomerPurchaseOrderLineScheduleReferenceType, "TypeCustomCustomerPurchaseOrderLineScheduleReferenceType");
