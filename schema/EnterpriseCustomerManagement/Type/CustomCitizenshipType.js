var Modeler = require("../Modeler.js");
var className = 'TypeCustomCitizenshipType';

var TypeCustomCitizenshipType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCitizenshipType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCitizenshipType",
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
	  CustomCitizenshipType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCitizenshipType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCitizenshipType;
Modeler.register(TypeCustomCitizenshipType, "TypeCustomCitizenshipType");
