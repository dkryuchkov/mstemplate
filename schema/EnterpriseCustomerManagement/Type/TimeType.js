var Modeler = require("../Modeler.js");
var className = 'TypeTimeType';

var TypeTimeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TimeType: {
      type: "string",
      wsdlDefinition: {
        name: "TimeType",
        "xsd:annotation": {
          "xsd:documentation": "The instance of time that occurs every day"
        },
        "xsd:restriction": {
          base: "xsd:time"
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
	  TimeType: {
      type: "string",
      wsdlDefinition: {
        name: "TimeType",
        "xsd:annotation": {
          "xsd:documentation": "The instance of time that occurs every day"
        },
        "xsd:restriction": {
          base: "xsd:time"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTimeType;
Modeler.register(TypeTimeType, "TypeTimeType");
