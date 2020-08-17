var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPurchaseOrderReferenceType';

var TypeCustomCustomerPurchaseOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPurchaseOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPurchaseOrderReferenceType",
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
	  CustomCustomerPurchaseOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPurchaseOrderReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPurchaseOrderReferenceType;
Modeler.register(TypeCustomCustomerPurchaseOrderReferenceType, "TypeCustomCustomerPurchaseOrderReferenceType");
