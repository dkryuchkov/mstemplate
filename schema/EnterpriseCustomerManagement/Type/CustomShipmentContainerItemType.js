var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentContainerItemType';

var TypeCustomShipmentContainerItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentContainerItemType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentContainerItemType",
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
	  CustomShipmentContainerItemType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentContainerItemType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentContainerItemType;
Modeler.register(TypeCustomShipmentContainerItemType, "TypeCustomShipmentContainerItemType");
