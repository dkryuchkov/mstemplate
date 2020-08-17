var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentContainerChargeType';

var TypeCustomShipmentContainerChargeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentContainerChargeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentContainerChargeType",
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
	  CustomShipmentContainerChargeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentContainerChargeType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentContainerChargeType;
Modeler.register(TypeCustomShipmentContainerChargeType, "TypeCustomShipmentContainerChargeType");
