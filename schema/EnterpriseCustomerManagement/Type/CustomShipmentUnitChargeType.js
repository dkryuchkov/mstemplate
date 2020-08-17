var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentUnitChargeType';

var TypeCustomShipmentUnitChargeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentUnitChargeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentUnitChargeType",
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
	  CustomShipmentUnitChargeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentUnitChargeType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentUnitChargeType;
Modeler.register(TypeCustomShipmentUnitChargeType, "TypeCustomShipmentUnitChargeType");
