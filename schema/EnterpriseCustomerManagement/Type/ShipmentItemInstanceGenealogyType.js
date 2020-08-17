var Modeler = require("../Modeler.js");
var className = 'TypeShipmentItemInstanceGenealogyType';

var TypeShipmentItemInstanceGenealogyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentItemInstanceGenealogyType: {
      type: "string",
      wsdlDefinition: {
        name: "ShipmentItemInstanceGenealogyType",
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
	  ShipmentItemInstanceGenealogyType: {
      type: "string",
      wsdlDefinition: {
        name: "ShipmentItemInstanceGenealogyType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeShipmentItemInstanceGenealogyType;
Modeler.register(TypeShipmentItemInstanceGenealogyType, "TypeShipmentItemInstanceGenealogyType");
