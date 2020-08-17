var Modeler = require("../Modeler.js");
var className = 'TypeCustomPurchaseOrderReferenceType';

var TypeCustomPurchaseOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPurchaseOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseOrderReferenceType",
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
	  CustomPurchaseOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseOrderReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPurchaseOrderReferenceType;
Modeler.register(TypeCustomPurchaseOrderReferenceType, "TypeCustomPurchaseOrderReferenceType");
