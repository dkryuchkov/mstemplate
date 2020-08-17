var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPurchaseOrderLineReferenceType';

var TypeCustomCustomerPurchaseOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPurchaseOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPurchaseOrderLineReferenceType",
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
	  CustomCustomerPurchaseOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPurchaseOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPurchaseOrderLineReferenceType;
Modeler.register(TypeCustomCustomerPurchaseOrderLineReferenceType, "TypeCustomCustomerPurchaseOrderLineReferenceType");
