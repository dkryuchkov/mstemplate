var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentContainerType';

var TypeCustomShipmentContainerType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentContainerType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentContainerType",
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
	  CustomShipmentContainerType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentContainerType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentContainerType;
Modeler.register(TypeCustomShipmentContainerType, "TypeCustomShipmentContainerType");
