var Modeler = require("../Modeler.js");
var className = 'TypeCustomVehicleReferenceType';

var TypeCustomVehicleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomVehicleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomVehicleReferenceType",
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
	  CustomVehicleReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomVehicleReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomVehicleReferenceType;
Modeler.register(TypeCustomVehicleReferenceType, "TypeCustomVehicleReferenceType");
