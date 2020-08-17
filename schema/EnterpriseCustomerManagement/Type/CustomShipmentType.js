var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentType';

var TypeCustomShipmentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentType",
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
	  CustomShipmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentType;
Modeler.register(TypeCustomShipmentType, "TypeCustomShipmentType");
