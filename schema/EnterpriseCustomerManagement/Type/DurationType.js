var Modeler = require("../Modeler.js");
var className = 'TypeDurationType';

var TypeDurationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DurationType: {
      type: "string",
      wsdlDefinition: {
        name: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Duration represents a duration of time. The value space of duration is a six-dimensional space where the coordinates designate the Gregorian year, month, day, hour, minute, and second components defined in 5.5.3.2 of [ISO 8601], respectively. These components are ordered in their significance by their order of appearance i.e. as year, month, day, hour, minute, and second"
        },
        "xsd:restriction": {
          base: "xsd:duration"
        },
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
	  DurationType: {
      type: "string",
      wsdlDefinition: {
        name: "DurationType",
        "xsd:annotation": {
          "xsd:documentation": "Duration represents a duration of time. The value space of duration is a six-dimensional space where the coordinates designate the Gregorian year, month, day, hour, minute, and second components defined in 5.5.3.2 of [ISO 8601], respectively. These components are ordered in their significance by their order of appearance i.e. as year, month, day, hour, minute, and second"
        },
        "xsd:restriction": {
          base: "xsd:duration"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDurationType;
Modeler.register(TypeDurationType, "TypeDurationType");
