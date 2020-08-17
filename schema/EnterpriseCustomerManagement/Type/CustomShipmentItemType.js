var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentItemType';

var TypeCustomShipmentItemType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentItemType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemType",
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
	  CustomShipmentItemType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentItemType;
Modeler.register(TypeCustomShipmentItemType, "TypeCustomShipmentItemType");
