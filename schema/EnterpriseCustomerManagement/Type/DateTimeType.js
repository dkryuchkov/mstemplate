var Modeler = require("../Modeler.js");
var className = 'TypeDateTimeType';

var TypeDateTimeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DateTimeType: {
      type: "string",
      wsdlDefinition: {
        name: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "A particular point in the progression of time together with the relevant supplementary information"
        },
        "xsd:restriction": {
          base: "xsd:dateTime"
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
	  DateTimeType: {
      type: "string",
      wsdlDefinition: {
        name: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "A particular point in the progression of time together with the relevant supplementary information"
        },
        "xsd:restriction": {
          base: "xsd:dateTime"
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDateTimeType;
Modeler.register(TypeDateTimeType, "TypeDateTimeType");
