var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentItemChargeType';

var TypeCustomShipmentItemChargeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentItemChargeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemChargeType",
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
	  CustomShipmentItemChargeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemChargeType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentItemChargeType;
Modeler.register(TypeCustomShipmentItemChargeType, "TypeCustomShipmentItemChargeType");
