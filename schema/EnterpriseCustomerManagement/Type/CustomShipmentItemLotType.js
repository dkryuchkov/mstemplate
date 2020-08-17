var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentItemLotType';

var TypeCustomShipmentItemLotType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentItemLotType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemLotType",
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
	  CustomShipmentItemLotType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemLotType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentItemLotType;
Modeler.register(TypeCustomShipmentItemLotType, "TypeCustomShipmentItemLotType");
