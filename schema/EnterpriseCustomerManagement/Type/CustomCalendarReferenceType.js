var Modeler = require("../Modeler.js");
var className = 'TypeCustomCalendarReferenceType';

var TypeCustomCalendarReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCalendarReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCalendarReferenceType",
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
	  CustomCalendarReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCalendarReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCalendarReferenceType;
Modeler.register(TypeCustomCalendarReferenceType, "TypeCustomCalendarReferenceType");
