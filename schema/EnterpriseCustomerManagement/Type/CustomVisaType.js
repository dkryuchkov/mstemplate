var Modeler = require("../Modeler.js");
var className = 'TypeCustomVisaType';

var TypeCustomVisaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomVisaType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomVisaType",
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
	  CustomVisaType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomVisaType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomVisaType;
Modeler.register(TypeCustomVisaType, "TypeCustomVisaType");
