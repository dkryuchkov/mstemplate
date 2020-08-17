var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentSetType';

var TypeCustomShipmentSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentSetType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentSetType",
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
	  CustomShipmentSetType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentSetType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentSetType;
Modeler.register(TypeCustomShipmentSetType, "TypeCustomShipmentSetType");
