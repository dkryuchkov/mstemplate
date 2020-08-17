var Modeler = require("../Modeler.js");
var className = 'TypeCustomPassportType';

var TypeCustomPassportType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPassportType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPassportType",
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
	  CustomPassportType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPassportType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPassportType;
Modeler.register(TypeCustomPassportType, "TypeCustomPassportType");
