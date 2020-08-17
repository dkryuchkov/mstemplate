var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentChargeType';

var TypeCustomShipmentChargeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentChargeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentChargeType",
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
	  CustomShipmentChargeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentChargeType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentChargeType;
Modeler.register(TypeCustomShipmentChargeType, "TypeCustomShipmentChargeType");
