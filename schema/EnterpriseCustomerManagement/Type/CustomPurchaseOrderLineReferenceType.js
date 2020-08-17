var Modeler = require("../Modeler.js");
var className = 'TypeCustomPurchaseOrderLineReferenceType';

var TypeCustomPurchaseOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPurchaseOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseOrderLineReferenceType",
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
	  CustomPurchaseOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPurchaseOrderLineReferenceType;
Modeler.register(TypeCustomPurchaseOrderLineReferenceType, "TypeCustomPurchaseOrderLineReferenceType");
