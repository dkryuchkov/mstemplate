var Modeler = require("../Modeler.js");
var className = 'TypeCustomBusinessCalendarReferenceType';

var TypeCustomBusinessCalendarReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBusinessCalendarReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBusinessCalendarReferenceType",
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
	  CustomBusinessCalendarReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBusinessCalendarReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBusinessCalendarReferenceType;
Modeler.register(TypeCustomBusinessCalendarReferenceType, "TypeCustomBusinessCalendarReferenceType");
