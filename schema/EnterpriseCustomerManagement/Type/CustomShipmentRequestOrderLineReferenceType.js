var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentRequestOrderLineReferenceType';

var TypeCustomShipmentRequestOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentRequestOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentRequestOrderLineReferenceType",
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
	  CustomShipmentRequestOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentRequestOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentRequestOrderLineReferenceType;
Modeler.register(TypeCustomShipmentRequestOrderLineReferenceType, "TypeCustomShipmentRequestOrderLineReferenceType");
