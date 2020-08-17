var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentItemInstanceType';

var TypeCustomShipmentItemInstanceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentItemInstanceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemInstanceType",
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
	  CustomShipmentItemInstanceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemInstanceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentItemInstanceType;
Modeler.register(TypeCustomShipmentItemInstanceType, "TypeCustomShipmentItemInstanceType");
