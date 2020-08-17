var Modeler = require("../Modeler.js");
var className = 'TypeCustomPurchaseOrderShipmentReferenceType';

var TypeCustomPurchaseOrderShipmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPurchaseOrderShipmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseOrderShipmentReferenceType",
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
	  CustomPurchaseOrderShipmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseOrderShipmentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPurchaseOrderShipmentReferenceType;
Modeler.register(TypeCustomPurchaseOrderShipmentReferenceType, "TypeCustomPurchaseOrderShipmentReferenceType");
