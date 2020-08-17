var Modeler = require("../Modeler.js");
var className = 'TypeCustomVisitActivityEventType';

var TypeCustomVisitActivityEventType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomVisitActivityEventType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomVisitActivityEventType",
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
	  CustomVisitActivityEventType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomVisitActivityEventType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomVisitActivityEventType;
Modeler.register(TypeCustomVisitActivityEventType, "TypeCustomVisitActivityEventType");
