var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentReferenceType';

var TypeCustomShipmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentReferenceType",
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
	  CustomShipmentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentReferenceType;
Modeler.register(TypeCustomShipmentReferenceType, "TypeCustomShipmentReferenceType");
