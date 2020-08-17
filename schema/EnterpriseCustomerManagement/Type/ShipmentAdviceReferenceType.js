var Modeler = require("../Modeler.js");
var className = 'TypeShipmentAdviceReferenceType';

var TypeShipmentAdviceReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentAdviceIdentification: {
      type: "TypeShipmentAdviceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentAdviceIdentification",
        type: "ShipmentAdviceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
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
	  ShipmentAdviceIdentification: {
      type: "TypeShipmentAdviceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentAdviceIdentification",
        type: "ShipmentAdviceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeShipmentAdviceReferenceType;
Modeler.register(TypeShipmentAdviceReferenceType, "TypeShipmentAdviceReferenceType");
