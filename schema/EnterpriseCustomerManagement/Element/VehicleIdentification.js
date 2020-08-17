var Modeler = require("../Modeler.js");
var className = 'ElementVehicleIdentification';

var ElementVehicleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  VehicleIdentification: {
      type: "TypeVehicleIdentificationType",
      wsdlDefinition: {
        name: "VehicleIdentification",
        type: "VehicleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Vehicle"
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
	  VehicleIdentification: {
      type: "TypeVehicleIdentificationType",
      wsdlDefinition: {
        name: "VehicleIdentification",
        type: "VehicleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Vehicle"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementVehicleIdentification;
Modeler.register(ElementVehicleIdentification, "ElementVehicleIdentification");
