var Modeler = require("../Modeler.js");
var className = 'TypeCustomManufacturerItemIdentificationType';

var TypeCustomManufacturerItemIdentificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomManufacturerItemIdentificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomManufacturerItemIdentificationType",
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
	  CustomManufacturerItemIdentificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomManufacturerItemIdentificationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomManufacturerItemIdentificationType;
Modeler.register(TypeCustomManufacturerItemIdentificationType, "TypeCustomManufacturerItemIdentificationType");
