var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentItemReferenceType';

var TypeCustomShipmentItemReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentItemReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemReferenceType",
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
	  CustomShipmentItemReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentItemReferenceType;
Modeler.register(TypeCustomShipmentItemReferenceType, "TypeCustomShipmentItemReferenceType");
