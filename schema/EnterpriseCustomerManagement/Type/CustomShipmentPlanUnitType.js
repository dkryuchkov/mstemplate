var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentPlanUnitType';

var TypeCustomShipmentPlanUnitType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentPlanUnitType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentPlanUnitType",
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
	  CustomShipmentPlanUnitType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentPlanUnitType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentPlanUnitType;
Modeler.register(TypeCustomShipmentPlanUnitType, "TypeCustomShipmentPlanUnitType");
