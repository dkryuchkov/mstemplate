var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentItemInstanceRangeType';

var TypeCustomShipmentItemInstanceRangeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentItemInstanceRangeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemInstanceRangeType",
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
	  CustomShipmentItemInstanceRangeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemInstanceRangeType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentItemInstanceRangeType;
Modeler.register(TypeCustomShipmentItemInstanceRangeType, "TypeCustomShipmentItemInstanceRangeType");
