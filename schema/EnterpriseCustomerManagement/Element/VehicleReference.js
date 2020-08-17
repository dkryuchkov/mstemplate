var Modeler = require("../Modeler.js");
var className = 'ElementVehicleReference';

var ElementVehicleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  VehicleReference: {
      type: "TypeVehicleReferenceType",
      wsdlDefinition: {
        name: "VehicleReference",
        type: "VehicleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Vehicle that is used for shipping Goods from one location to another location. This reference contains the vehicle identification information like License plate number,  Vehicle number etc.\n ."
        },
        ns: "WL5G3N2",
        attribute: false
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
	  VehicleReference: {
      type: "TypeVehicleReferenceType",
      wsdlDefinition: {
        name: "VehicleReference",
        type: "VehicleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Vehicle that is used for shipping Goods from one location to another location. This reference contains the vehicle identification information like License plate number,  Vehicle number etc.\n ."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementVehicleReference;
Modeler.register(ElementVehicleReference, "ElementVehicleReference");
