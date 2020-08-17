var Modeler = require("../Modeler.js");
var className = 'TypeVehicleReferenceType';

var TypeVehicleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  VehicleIdentification: {
      type: "TypeVehicleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:VehicleIdentification",
        type: "VehicleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ManufacturerCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManufacturerCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Manufacturer or make of the vehicle"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ModelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ModelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Model of the vehicle"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ModelYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ModelYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Model year for the vehicle"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomVehicleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomVehicleReferenceType",
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
	  VehicleIdentification: {
      type: "TypeVehicleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:VehicleIdentification",
        type: "VehicleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ManufacturerCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManufacturerCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Manufacturer or make of the vehicle"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ModelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ModelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Model of the vehicle"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ModelYear: {
      type: "TypeYearType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ModelYear",
        type: "YearType",
        "xsd:annotation": {
          "xsd:documentation": "Model year for the vehicle"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomVehicleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomVehicleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeVehicleReferenceType;
Modeler.register(TypeVehicleReferenceType, "TypeVehicleReferenceType");
